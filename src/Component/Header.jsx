import { Link } from "react-router";
import LogImg from "../assets/logo_2.png"
export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-3">
          <div className="w-12 h-12">
            <img src={LogImg} className="w-full h-full object-cover" alt="" />
          </div>
            <h3 className="">Fabric Dashboard</h3>
        </Link>
        <Link to="/documentation" className="btn btn-primary">
          Document
        </Link>
      </div>
    </header>
  );
}
