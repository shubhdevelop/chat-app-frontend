import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-140px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
