const API_URL = "http://127.0.0.1:8000";


export function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 pt-10 py-6 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Fabric QA </p>
        <p>
          API URL: <code className="px-1 py-0.5 bg-gray-100 rounded">{API_URL}</code>
        </p>
      </div>
    </footer>
  );
}