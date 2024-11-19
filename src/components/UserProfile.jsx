import { useContext } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import Loader from "./Loader";

const UserProfile = () => {
  const { user, loading } = useContext(ProviderContext);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center py-6 w-full h-full">
      {
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="flex flex-col justify-center items-center space-y-2 md:space-y-3 bg-white shadow-2xl py-6 px-8 rounded-lg"
        >
          <img
            data-aos="zoom-out-down"
            data-aos-duration="1300"
            className="md:w-32 w-24 md:h-32 h-24 object-cover bg-center rounded-full border-2 border-darkPri"
            src={
              user && user.photoURL
                ? user.photoURL
                : "https://i.ibb.co.com/tpZx23R/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg"
            }
            alt=""
          />
          <p
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            className="text-xs md:text-sm lg:text-base"
          >
            {user && user.email ? user.email : ""}
          </p>
          <h3
            data-aos="zoom-out-down"
            data-aos-duration="1100"
            className="text-lg md:text-xl lg:text-2xl"
          >
            {user && user.displayName ? user.displayName : ""}
          </h3>
          <p data-aos="zoom-out-down" data-aos-duration="1000" className="my-2">
            <Link
              to="/profile/updateProfile"
              className="btn text-xs md:text-sm lg:text-base bg-darkPri rounded-lg py-1 md:py-2 px-3 md:px-4 "
            >
              Update Profile
            </Link>
          </p>
        </div>
      }
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default UserProfile;
