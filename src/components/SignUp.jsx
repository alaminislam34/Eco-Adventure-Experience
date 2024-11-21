import { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import "aos/dist/aos.css";
import Aos from "aos";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [error, setError] = useState(null);
  const { show, setShow, setUser } = useContext(ProviderContext);
  const navigate = useNavigate();

  const validatePassword = (value) => {
    let message = "";
    if (!/[A-Z]/.test(value)) {
      message = "At least one Uppercase, lowercase and 6+ chars.";
    }
    if (!/[a-z]/.test(value)) {
      message = "At least one Uppercase, lowercase and 6+ chars.";
    }
    if (value.length < 6) {
      message = "At least one Uppercase, lowercase and 6+ chars.";
    }
    setErrors(message);
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors) {
      return;
    }
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/");
        setUser(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {})
          .catch(() => {});
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
        navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex justify-center items-center max-w-md mx-auto h-full my-6">
      <form
        data-aos="zoom-out-down"
        data-aos-duration="800"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border shadow-2xl py-6 px-8 rounded-xl w-full m-4 bg-white"
      >
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-bold my-2 text-center"
          data-aos="zoom-out-down"
          data-aos-duration="2200"
        >
          Register Your Account
        </h2>
        {error ? (
          <p className="text-red-500 my-2 text-center text-sm">
            {error.message}
          </p>
        ) : (
          ""
        )}
        <input
          data-aos="zoom-out-down"
          data-aos-duration="1800"
          name="name"
          className="py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base rounded-md focus:outline-primary focus:outline-none border-base-300 w-full bg-base-300"
          type="text"
          placeholder="Your name"
          required
        />
        <input
          data-aos="zoom-out-down"
          data-aos-duration="1600"
          type="text"
          name="photoURL"
          placeholder="PhotoURL"
          className="py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base rounded-md focus:outline-primary focus:outline-none border-base-300 w-full bg-base-300"
          required
        />
        <input
          data-aos="zoom-out-down"
          data-aos-duration="1400"
          name="email"
          className="py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base rounded-md focus:outline-primary focus:outline-none border-base-300 w-full bg-base-300"
          type="email"
          placeholder="Your email"
          required
        />
        <div
          className="relative"
          data-aos="zoom-out-down"
          data-aos-duration="1200"
        >
          <input
            name="password"
            className="py-1.5 md:py-2 px-2 md:px-3 text-sm md:text-base rounded-md focus:outline-primary focus:outline-none border-base-300 w-full bg-base-300"
            type={show ? "text" : "password"}
            placeholder="Your password"
            value={password}
            onChange={handlePassword}
            required
          />

          <button
            onClick={() => setShow(!show)}
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4"
          >
            {show ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
          </button>
        </div>
        {errors ? (
          <p className="my-2 text-red-500 text-xs md:text-sm">{errors}</p>
        ) : (
          ""
        )}
        <div data-aos="zoom-out-down" data-aos-duration="1000">
          <button
            type="submit"
            className="py-1.5 md:py-2 px-2 md:px-3 rounded-md bg-primary hover:bg-darkPri font-semibold text-sm md:text-base lg:text-lg w-full"
          >
            Create Account
          </button>
        </div>
        <p
          className="text-xs md:text-sm lg:text-base font-medium text-right"
          data-aos="zoom-out-down"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          Already have an account ?
          <Link to="/login" className="text-darkPri font-bold underline pl-2">
            Login
          </Link>
        </p>
        <button
          type="button"
          onClick={handleSignUpWithGoogle}
          className="btn bg-base-300 hover:bg-primary text-black"
        >
          <FaGoogle />
          Continue with google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
