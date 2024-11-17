import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full my-6">
      <form className="flex flex-col gap-4 max-w-lg mx-auto border shadow-2xl p-6 rounded-xl">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-2 text-center">
          Login
        </h2>
        <input
          className="input input-warning focus:outline-none border-base-300"
          type="email"
          placeholder="Your email"
        />
        <input
          className="input input-warning focus:outline-none border-base-300"
          type="password"
          placeholder="Your password"
        />
        <button className="underline text-sm font-semibold">
          Forget Password
        </button>
        <button className="btn bg-primary hover:bg-darkPri font-semibold text-base md:text-lg ">
          Login
        </button>
        <p className="text-sm font-medium">
          Don`t have an account ?
          <Link className="text-darkPri font-bold underline">Sign Up</Link>
        </p>
        <button className="btn bg-base-300 hover:bg-primary text-black">
          <FaGoogle />
          Continue with google
        </button>
      </form>
    </div>
  );
};

export default Login;
