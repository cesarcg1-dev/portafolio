import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import TaskFlow from "./pages/TaskFlow";
import CRM from "./pages/CRM";
import BarberShop from "./pages/BarberShop";

export default function App() {
  const isHome = useLocation().pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {!isHome && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/taskflow" element={<TaskFlow />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/barbershop" element={<BarberShop />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
    </div>
  );
}
