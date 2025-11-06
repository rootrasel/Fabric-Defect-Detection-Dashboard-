// src/App.jsx
import React, { useCallback, useState } from "react";
import { UploadZone } from "./Component/UploadZone";
import { Header } from "./Component/Header";
import { Stat } from "./Component/Stat";
import { ResultCard } from "./Component/ResultCard";
import { Footer } from "./Component/Footer";

// ⬇️ Backend base URL
const API_URL = "http://127.0.0.1:8000";

const cx = (...cls) => cls.filter(Boolean).join(" ");
const percent = (p) => `${Math.round((Number(p) || 0) * 100)}%`;

export default function App() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [binaryData, setBinaryData] = useState(null);
  console.log(binaryData);

  const reset = useCallback(() => {
    setFile(null);
    setFileUrl("");
    setResult(null);
    setError("");
    setLoading(false);
  }, []);

  // File handler (binary + preview + validation)
  const handleFile = useCallback((f) => {
    if (!f) return;

    if (!f.type?.startsWith?.("image/")) {
      setError("Please upload image files only");
      return;
    }

    setError("");
    setFile(f);

    // Preview 
    const url = URL.createObjectURL(f);
    setFileUrl(url);

    // Base64 binary 
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result.split(",")[1];
      setBinaryData(base64Data);
    };
    reader.readAsDataURL(f);
  }, []);

  // Prediction Call
  const callPredict = async () => {
    if (!file) {
      setError("No file selected!");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const form = new FormData();
      form.append("file", file);

      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API ${res.status}: ${text}`);
      }

      const data = await res.json();

      const normalized = {
        prediction: data.prediction ?? "",
        confidence:
          typeof data.confidence === "number"
            ? data.confidence
            : parseFloat(data.confidence ?? 0),
        heatmap_url: data.heatmap_url
          ? data.heatmap_url.startsWith("http")
            ? data.heatmap_url
            : `${API_URL}${data.heatmap_url}`
          : "",
        raw: data,
      };

      setResult(normalized);
      setHistory((prev) => [{ file, previewUrl: fileUrl, result: normalized }, ...prev].slice(0, 12));
    } catch (err) {
      console.error(err);
      const msg = err?.message || "Unknown error";
      setError(msg);
      setResult({ error: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-dvh">
      <Header />

      <main className="max-w-6xl min-h-[70vh] mx-auto px-4 py-6 space-y-6">
        {/* Top stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="Status" value={loading ? "Processing..." : result ? "Ready" : "Uninitialized"} />
          <Stat label="Final Result" value={result?.prediction || "—"} />
          <Stat label="Final Confidence" value={result?.confidence != null ? percent(result.confidence) : "—"} />
          <Stat label="Number of Uploads" value={history.length.toString()} />
        </section>

        {/* Upload / Result */}
        <section className="space-y-4">
          <UploadZone onFile={handleFile} callPredict={callPredict} />
          {error && (
            <div className="text-sm border p-3 rounded-xl">
              ⚠️ {error}
            </div>
          )}
        </section>

        {file && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                Choose file: <span className="font-medium">{file.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={callPredict}
                  disabled={loading}
                  className={cx(
                    "px-3 py-1.5 rounded-xl text-sm border",
                    loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
                  )}
                >
                  Re-predict
                </button>
                <button
                  className="px-3 py-1.5 rounded-xl text-sm border hover:opacity-80"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className={cx("rounded-3xl border p-4", loading && "opacity-70 pointer-events-none")}>
              {loading && <div className="mb-3 text-sm">Predicting... Please wait.</div>}
              {result ? (
                <ResultCard result={result} fileUrl={fileUrl} onClear={reset} />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="rounded-2xl border aspect-video flex items-center justify-center">
                    Image Preview
                  </div>
                  <div className="rounded-2xl border h-48"></div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}