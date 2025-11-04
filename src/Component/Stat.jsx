const cx = (...cls) => cls.filter(Boolean).join(" ");

export function Stat({ label, value, hint, positive }) {
  return (
    <div className="p-4 rounded-2xl border bg-white shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className={cx("text-2xl font-semibold", positive ? "text-emerald-600" : "text-gray-900")}>
        {value}
      </div>
      {hint && <div className="text-xs text-gray-500 mt-1">{hint}</div>}
    </div>
  );
}
