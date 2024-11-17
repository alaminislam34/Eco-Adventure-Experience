import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";

const SignUp = () => {
  const { show, setShow } = useContext(ProviderContext);
  return (
    <div className="flex justify-center items-center max-w-md mx-auto h-full my-6">
      <form className="flex flex-col gap-4 border shadow-2xl p-6 rounded-xl w-full">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-2 text-center">
          Login
        </h2>
        <input
          name="name"
          className="input input-warning focus:outline-none border-base-300"
          type="text"
          placeholder="Your name"
        />
        <input
          type="text"
          name="photoURL"
          placeholder="PhotoURL"
          className="input input-warning focus:outline-none border-base-300"
        />
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
            className="absolute top-1/2 -translate-y-1/2 right-2"
          >
            {show ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
          </button>
        </div>
        <button className="btn bg-primary hover:bg-darkPri font-semibold text-base md:text-lg ">
          Login
        </button>
        <p className="text-sm font-medium text-right">
          Already have an account ?
          <Link to="/login" className="text-darkPri font-bold underline pl-2">
            Login
          </Link>
        </p>
        <button className="btn bg-base-300 hover:bg-primary text-black">
          <FaGoogle />
          Continue with google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
