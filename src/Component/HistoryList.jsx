export function HistoryList({ items, onSelect, onClear }) {
    const percent = (p) => `${Math.round((Number(p) || 0) * 100)}%`;
  if (!items.length) return null;
  return (
    <div className="p-4 rounded-2xl border bg-white">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium">History (Recent Uploads)</div>
        <button onClick={onClear} className="text-xs text-gray-600 hover:text-gray-900 underline">
          Clear
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {items.map((it, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(it)}
            className="group relative overflow-hidden rounded-xl border bg-gray-50 hover:bg-gray-100"
            title={`${it.result?.prediction ?? "—"} • ${percent(it.result?.confidence ?? 0)}`}
          >
            <img src={it.previewUrl} alt="thumb" className="aspect-square object-cover w-full" />
            <div className="absolute inset-x-0 bottom-0 p-1.5 text-[10px] bg-white/80 backdrop-blur flex items-center justify-between">
              <span className="truncate max-w-[80%]">{it.result?.prediction ?? "—"}</span>
              <span className="tabular-nums">{percent(it.result?.confidence ?? 0)}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
