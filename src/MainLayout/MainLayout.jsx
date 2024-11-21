import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Particles from "particlesjs";

const MainLayout = () => {
  useEffect(() => {
    Particles.init({
      selector: ".background",
      maxParticles: 150,
      color: ["#fefefe"],
      speed: 0.2,
      connectParticles: true,
      sizeVariations: 3,
      mouse: {
        enable: true,
        distance: 100,
      },
    });
  }, []);
  return (
    <div className="bg-base-200 font-poppins overflow-hidden">
      <canvas className="background"></canvas>
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
