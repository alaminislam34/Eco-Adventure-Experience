import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import Loader from "./Loader";

const UserProfile = () => {
  const { user, loading } = useContext(ProviderContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center my-6">
      <div className="flex flex-col justify-center items-center space-y-2 md:space-y-3">
        <img
          className="md:w-40 w-32 md:h-40 h-32 object-cover bg-center rounded-full border-2 border-darkPri"
          src={user.photoURL}
          alt=""
        />
        <p className="text-xs md:text-sm lg:text-base">{user.email}</p>
        <h3 className="text-lg md:text-xl lg:text-2xl">{user.displayName}</h3>
        <p>
          <Link
            to="/userProfile/updateProfile"
            className="text-sm md:text-base lg:text-lg bg-primary hover:bg-darkPri py-1 md:py-2 px-3 md:px-4"
          >
            Update Profile
          </Link>
        </p>
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default UserProfile;
