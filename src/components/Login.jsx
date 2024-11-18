import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Login = () => {
  const { show, setShow, user, setUser, setError, signUpWithGoogle } =
    useContext(ProviderContext);
  console.log(user);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div className="flex justify-center max-w-md mx-auto items-center h-full my-6">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 border shadow-2xl p-6 rounded-xl w-full"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-2 text-center">
          Login
        </h2>
        <input
          name="email"
          className="input input-warning focus:outline-none border-base-300"
          type="email"
          placeholder="Your email"
        />
        <div className="relative">
          <input
            name="password"
            className="input input-warning focus:outline-none border-base-300 w-full"
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
        <button className="underline text-sm font-semibold text-left pl-2">
          Forget Password
        </button>
        <button className="btn bg-primary hover:bg-darkPri font-semibold text-base md:text-lg ">
          Login
        </button>
        <p className="text-sm font-medium text-right">
          Don`t have an account ?
          <Link to="/signUp" className="text-darkPri font-bold underline pl-2">
            Sign Up
          </Link>
        </p>

        <button
          onClick={signUpWithGoogle}
          className="btn bg-base-300 hover:bg-primary text-black"
        >
          <FaGoogle />
          Continue with google
        </button>
      </form>
    </div>
  );
};

export default Login;
