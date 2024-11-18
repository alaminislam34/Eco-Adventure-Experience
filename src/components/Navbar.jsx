import { useContext, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {
  const [profileDe, setProfileDe] = useState(false);
  const { user } = useContext(ProviderContext);
  const navigate = useNavigate();

  const handleProfileDetailsShow = () => {
    setProfileDe(!profileDe);
  };
  const handleLogOut = () => signOut(auth).then().catch();

  return (
    <div>
      <nav className="flex flex-row justify-between items-center my-4 w-11/12 mx-auto">
        <div>
          <h3 className="font-playFair text-xl md:text-2xl lg:text-3xl font-semibold">
            <Link to="/">EcoVent</Link>
          </h3>
        </div>
        <div className="flex-row *:py-1.5 *:px-4 *:rounded-md hidden md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="flex flex-row gap-2 items-center">
          {user ? (
            <div className="relative">
              <button onClick={handleProfileDetailsShow}>
                {user?.photoURL ? (
                  <img
                    className="w-14 h-14 border-4 border-darkPri rounded-full object-cover bg-center bg-cover"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <FaRegUserCircle className="text-2xl" />
                )}
              </button>
              {profileDe === true && (
                <div className="absolute top-16 right-0 max-w-xs max-h-[300px] bg-base-200 rounded-lg shadow-xl border-2 border-darkPri">
                  <ul className="*:py-2 *:px-3 *:rounded-lg p-2 space-y-1">
                    <li className="text-sm md:text-base shadow-inner">
                      {user.email}
                    </li>
                    <li className="text-sm md:text-base hover:bg-darkPri font-medium cursor-pointer shadow-inner">
                      profiile
                    </li>
                    <li
                      onClick={handleLogOut}
                      className="text-sm md:text-base hover:bg-darkPri font-medium cursor-pointer shadow-inner"
                    >
                      log out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-darkPri py-2 px-4 rounded-lg flex flex-row gap-2 justify-center items-center font-medium"
            >
              Login
              <HiOutlineLogin className="text-xl" />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
