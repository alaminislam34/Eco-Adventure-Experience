import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-base-200 font-poppins">
      <div className="max-w-7xl mx-auto min-h-[70vh] ">
        <Navbar />
        <section className="">
          <Outlet />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
