import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex flex-row justify-between items-center my-4">
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
          <button>
            <FaRegUserCircle className="text-2xl" />
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-primary hover:bg-darkPri py-2 px-4 rounded-lg flex flex-row gap-2 justify-center items-center font-medium"
          >
            Login
            <HiOutlineLogin className="text-xl" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
