import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";
import auth from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const { setError } = useState(ProviderContext);
  const navigate = useNavigate();

  const handleNewPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Password reset email send");
        setTimeout(() => {
          navigate("/loginPage");
        }, 3000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="my-6 flex justify-center items-center">
      <form
        onSubmit={handleNewPassword}
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="max-w-[350px] flex flex-col justify-center items-center gap-2 p-4 md:p-6 bg-white rounded-xl shadow-2xl space-y-3 md:space-y-4"
      >
        <h3
          data-aos="zoom-out-down"
          data-aos-duration="1300"
          className="text-lg md:text-xl font-semibold text-center "
        >
          Forget Password
        </h3>

        <div
          data-aos="zoom-out-down"
          data-aos-duration="1300"
          className="w-full"
        >
          <input
            className="w-full h-full py-1.5 md:py-2 px-3 md:px-4 rounded-lg border border-primary outline-darkPri"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        {/* <div
          data-aos="zoom-out-down"
          data-aos-duration="1300"
          className="relative w-full"
        >
          <input
            className="w-full h-full py-1.5 md:py-2 px-3 md:px-4 rounded-lg border border-primary outline-darkPri"
            type={show ? "text" : "password"}
            value={password}
            name="password1"
            placeholder="New Password"
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
        <div
          data-aos="zoom-out-down"
          data-aos-duration="1300"
          className="relative w-full"
        >
          <input
            className="w-full h-full py-1.5 md:py-2 px-3 md:px-4 rounded-lg border border-primary outline-darkPri"
            type={eye ? "text" : "password"}
            name="password2"
            placeholder="Re-type Password"
            required
          />
          <button
            onClick={() => setEye(!eye)}
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4"
          >
            {eye ? <LiaEyeSolid /> : <LiaEyeSlashSolid />}
          </button>
        </div> */}

        <div
          data-aos="zoom-out-down"
          data-aos-duration="1300"
          className="w-full"
        >
          <button
            type="submit"
            className="btn h-full w-full bg-primary hover:bg-darkPri"
          >
            Forget
          </button>
        </div>

        <div data-aos="zoom-out-down" data-aos-duration="1300">
          <Link to="/loginPage" type="button" className="text-right py-1 px-2">
            Back
          </Link>
        </div>
      </form>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default ForgetPassword;
