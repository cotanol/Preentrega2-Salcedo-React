// src/components/layouts/Layout.tsx
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


export default function Layout() {
  return (
    <>
        <header>
            <NavBar />
        </header>
        <main className="bg-gray-100">
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  );
}
