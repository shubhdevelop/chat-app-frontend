import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className={`h-[calc(100vh-80px)]`}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
