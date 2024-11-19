import { useContext, useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import Aos from "aos";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [profileDe, setProfileDe] = useState(false);
  const { user } = useContext(ProviderContext);
  const navigate = useNavigate();

  const handleProfileDetailsShow = () => {
    setProfileDe(!profileDe);
  };
  const handleLogOut = () => {
    signOut(auth).then().catch();
    setProfileDe(false);
  };
  useEffect(() => {
    Aos.init({
      once: true,
    });
    const handleSticky = () => {
      if (window.scrollY > 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  return (
    <div className="px-4 md:px-6 py-2">
      <div
        className={`${
          sticky
            ? "fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl px-4 md:px-6 py-2 md:py-4"
            : "static py-4"
        } duration-1000 delay-75`}
      >
        <nav className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <div className="drawer md:hidden">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div
                className="drawer-content"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <label htmlFor="my-drawer-4" className="drawer-button ">
                  <RiMenu2Fill />
                </label>
              </div>
              <div className="drawer-side z-10">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-300 *:bg-white space-y-2 *:text-sm md:*:text-base text-base-content min-h-full py-4 px-2 *:shadow-inner *:py-1.5 *:px-12 *:rounded-md">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/blog">Blog</NavLink>
                  {user && <NavLink to="/profile">Profile</NavLink>}
                </ul>
              </div>
            </div>
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-semibold"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <Link to="/">EcoVent</Link>
            </h3>
          </div>
          <div
            className="flex-row *:py-1 *:px-4 *:rounded-t-md hidden md:flex"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            {user && <NavLink to="/profile">Profile</NavLink>}
          </div>
          <div
            className="flex flex-row gap-2 items-center z-50"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {user && user.photoURL ? (
              <div className="relative z-[1000]">
                <button onClick={handleProfileDetailsShow}>
                  {user?.photoURL ? (
                    <img
                      className="md:w-14 md:h-14 w-10 h-10 border-4 border-darkPri rounded-full object-cover bg-center bg-cover"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaRegUserCircle className="text-2xl" />
                  )}
                </button>
                {profileDe === true && (
                  <div className="absolute top-14 md:top-16 right-0 w-44 md:w-60  max-h-[300px] rounded-lg shadow-xl bg-white border-2 border-darkPri z-[1000] ">
                    <ul className="md:*:py-2 *:py-1.5 md:*:px-3 *:px-2 *:rounded-lg p-2 space-y-1">
                      <li
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        className="text-sm md:text-base font-semibold"
                      >
                        {user.displayName}
                      </li>

                      <Link
                        onClick={() => setProfileDe(false)}
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        className="py-1.5 md:py-2 w-full inline-block text-xs md:text-sm hover:bg-darkPri cursor-pointer shadow-inner bg-base-200"
                        to="/profile"
                      >
                        Profile
                      </Link>

                      <Link
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        onClick={handleLogOut}
                        className="text-xs md:text-sm w-full inline-block hover:bg-darkPri cursor-pointer shadow-inner bg-base-200"
                      >
                        Log out
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
