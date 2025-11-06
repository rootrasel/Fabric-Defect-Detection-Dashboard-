import { Link } from "react-router";
import LogImg from "../assets/logo_2.png";
import ThemeToggle from "./ThemeToggle";
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
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/documentation"
            className="px-4 py-[6px] bg-primary text-white rounded-4xl hover:opacity-90 transition-opacity duration-200 mr-4"
          >
            Document
          </Link>
          
        </div>
      </div>
    </header>
  );
}
