import { useCallback, useRef, useState } from "react";

const cx = (...cls) => cls.filter(Boolean).join(" ");

export function UploadZone({ onFile, callPredict }) {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files?.[0];
      if (file) onFile(file);
    },
    [onFile]
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={cx(
        "rounded-3xl border-2 border-dashed p-6 transition bg-white",
        dragOver ? "border-gray-900 bg-gray-50" : "border-gray-300"
      )}
    >
      <div className="flex justify-around items-center gap-4 ">
        <div className="flex-1 space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              className="opacity-70"
            >
              <path
                fill="currentColor"
                d="M19 13v6H5v-6H3v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6zM7 10l1.41 1.41L11 8.83V18h2V8.83l2.59 2.58L17 10l-5-5z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-600">
              Upload an image or drag & drop.
            </div>
            <div className="text-xs text-gray-500">JPEG/PNG • up to ~10MB</div>
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={() => inputRef.current?.click()}
                className="px-3 py-1.5 rounded-xl bg-gray-900 text-white text-sm hover:opacity-90"
              >
                Choose file
              </button>
              <span className="text-xs text-gray-500">
                or drop an image here
              </span>
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onFile(file);
              }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={callPredict} className="px-4 py-[6px] bg-primary text-white rounded-4xl hover:opacity-90 transition-opacity duration-200 cursor-pointer">
            Prediction
          </button>
        </div>
      </div>
    </div>
  );
}
