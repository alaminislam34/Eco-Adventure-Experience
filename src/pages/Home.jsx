import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <h2
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-xl md:text-2xl font-semibold text-center mt-4 md:mt-6 font-merienda"
      >
        Choose Your Trips
      </h2>
      <div className="flex justify-center items-center mb-6">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="my-2 border-b-2 border-darkPri w-20 md:w-32 flex justify-center items-center text-center"
        ></div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
