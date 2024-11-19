import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import Loader from "./Loader";
import { HiOutlineLogin } from "react-icons/hi";

const UserProfile = () => {
  const { user, loading } = useContext(ProviderContext);
  const navigate = useNavigate();
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-6 w-full h-full">
      {
        <div className="flex flex-col justify-center items-center space-y-2 md:space-y-3">
          <img
            className="md:w-40 w-32 md:h-40 h-32 object-cover bg-center rounded-full border-2 border-darkPri"
            src={
              user && user.photoURL
                ? user.photoURL
                : "https://i.ibb.co.com/tpZx23R/360-F-229758328-7x8jw-Cwjt-BMm-C6rg-Fz-LFh-Zo-Ep-Lob-B6-L8.jpg"
            }
            alt=""
          />
          <p className="text-xs md:text-sm lg:text-base">
            {user && user.email ? user.email : ""}
          </p>
          <h3 className="text-lg md:text-xl lg:text-2xl">
            {user && user.displayName ? user.displayName : ""}
          </h3>
          <p>
            {user ? (
              <Link
                to="/userProfile/updateProfile"
                className="text-sm md:text-base lg:text-lg bg-darkPri rounded-lg py-1 md:py-2 px-3 md:px-4"
              >
                Update Profile
              </Link>
            ) : (
              <button
                data-aos="zoom-in"
                data-aos-duration="1500"
                onClick={() => navigate("/login")}
                className="bg-primary hover:bg-darkPri md:py-2 md:px-4 py-1.5 px-3 text-sm md:text-base rounded-lg flex flex-row gap-2 justify-center items-center font-medium"
              >
                Login
                <HiOutlineLogin className="md:text-xl text-lg" />
              </button>
            )}
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
