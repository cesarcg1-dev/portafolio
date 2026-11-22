import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tight">
          Chac<span className="text-emerald-600">Dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/crm" className="text-slate-600 hover:text-slate-900">
            CRM
          </Link>
          <Link to="/taskflow" className="text-slate-600 hover:text-slate-900">
            TaskFlow
          </Link>
          <Link
            to="/barbershop"
            className="text-slate-600 hover:text-slate-900"
          >
            BarberShop
          </Link>
        </nav>
        <a
          href="#contacto"
          className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
