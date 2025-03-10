import { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import Aos from "aos";

const Login = () => {
  const [error, setError] = useState(null);
  const location = useLocation();
  const { show, setShow, setUser } = useContext(ProviderContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error);
      });
  };
  const googleProvider = new GoogleAuthProvider();
  const handleSignUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex justify-center max-w-md mx-auto items-center h-full my-6">
      <form
        data-aos="zoom-in"
        data-aos-duration="800"
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 border p-6 m-4 rounded-xl w-full shadow-[_0px_4px_10px_rgba(0, 0, 0, 0.5)] bg-gradient-to-b from-[#F8F8FF] to-blue-300"
      >
        <h2
          data-aos="zoom-in-down"
          data-aos-duration="1400"
          className="text-xl md:text-2xl lg:text-3xl font-bold text-center"
        >
          Login
        </h2>
        {error ? (
          <p className="text-red-500 text-xs text-center my-2">
            {error.message}
          </p>
        ) : (
          ""
        )}
        <input
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          name="email"
          className="py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base rounded-md focus:outline-primary focus:outline-none border-base-300"
          type="email"
          placeholder="Your email"
        />
        <div
          className="relative"
          data-aos="zoom-in-down"
          data-aos-duration="1400"
        >
          <input
            name="password"
            className="py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base rounded-md focus:outline-primary focus:outline-none border-base-300 w-full"
            type={show ? "text" : "password"}
            placeholder="Your password"
          />
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4"
          >
            {show ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
          </button>
        </div>
        <Link
          to="/loginPage/forgetPassword"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className="underline text-sm font-semibold text-left pl-2"
        >
          Forget Password
        </Link>

        <div data-aos="zoom-in-down" data-aos-duration="1800">
          <button
            type="submit"
            className="py-1.5 md:py-2 px-2 md:px-3 rounded-md bg-primary hover:bg-darkPri font-semibold text-sm md:text-base lg:text-lg w-full"
          >
            Login
          </button>
        </div>

        <p
          className="text-xs md:text-sm lg:text-base font-medium text-right"
          data-aos="zoom-in-down"
          data-aos-duration="1800"
        >
          Don`t have an account ?
          <Link to="/signUp" className="text-darkPri font-bold underline pl-2">
            Sign Up
          </Link>
        </p>
        <div data-aos="zoom-in-down" data-aos-duration="2000">
          <button
            type="button"
            onClick={handleSignUpWithGoogle}
            className="btn bg-base-300 hover:bg-primary text-black w-full text-sm md:text-base"
          >
            <FaGoogle />
            Continue with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
