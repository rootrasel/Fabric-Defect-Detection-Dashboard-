import { Link } from "react-router";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-black text-white font-bold">
            AI
          </span>
          <div>
            <h1 className="text-lg font-semibold leading-tight">
              Fabric Defect Detection Dashboard
            </h1>
          </div>
        </div>
        <Link
          to="/documentation"
          className="text-sm text-gray-600 hover:text-gray-900 underline decoration-dotted"
        >
          Document
        </Link>
      </div>
    </header>
  );
}
