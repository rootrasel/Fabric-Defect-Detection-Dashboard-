import { useMemo, useState } from "react";
import { ImageWithHeatmap } from "./ImageWithHeatmap";
import { Stat } from "./Stat";

const cx = (...cls) => cls.filter(Boolean).join(" ");
const percent = (p) => `${Math.round((Number(p) || 0) * 100)}%`;
 
export function ResultCard({ result, fileUrl, onClear }) {
  const [opacity, setOpacity] = useState(0.6);

  const labelBadge = useMemo(() => {
    const isDefect = (result?.prediction || "").toLowerCase().includes("defect");
    return (
      <span
        className={cx(
          "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
          isDefect ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700"
        )}
      >
        <span className={cx("w-1.5 h-1.5 rounded-full", isDefect ? "bg-rose-600" : "bg-emerald-600")}></span>
        {result?.prediction || "—"}
      </span>
    );
  }, [result]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="space-y-3">
        <ImageWithHeatmap imageUrl={fileUrl} heatmapUrl={result?.heatmap_url} opacity={opacity} />
        <div className="flex items-center gap-4">
          <label className="text-xs text-gray-600">Heatmap Opacity</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={opacity}
            onChange={(e) => setOpacity(parseFloat(e.target.value))}
            className="w-48"
          />
          <span className="text-xs text-gray-500">{Math.round(opacity * 100)}%</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-5 rounded-2xl border bg-white shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">Prediction</div>
              {labelBadge}
            </div>
            <button
              onClick={onClear}
              className="text-sm text-gray-600 hover:text-gray-900 underline decoration-dotted"
            >
              New Image
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Stat
              label="Confidence"
              value={percent(result?.confidence ?? 0)}
              hint="Confidence score"
              positive={(result?.confidence ?? 0) >= 0.8}
            />
            <Stat label="Heatmap" value={result?.heatmap_url ? "Available" : "Not Available"} hint="Defect Location" />
          </div>
          {result?.error && (
            <div className="mt-4 text-sm text-rose-700 bg-rose-50 border border-rose-200 p-3 rounded-xl">⚠️ {result.error}</div>
          )}
        </div>

        <div className="p-5 rounded-2xl border bg-white">
          <div className="text-sm font-medium mb-2">API Response (Debug)</div>
          <pre className="text-xs bg-gray-50 p-3 rounded-xl overflow-auto max-h-64 border">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
