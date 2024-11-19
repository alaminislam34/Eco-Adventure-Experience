import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useContext } from "react";
import { ProviderContext } from "../ContextProvider/Provider";

const UpdateProfile = () => {
  const { setLoading } = useContext(ProviderContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        navigate("/profile");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-6 flex justify-center items-center">
      <form
        data-aos="zoom-in"
        data-aos-duration="1000"
        onSubmit={handleUpdateProfile}
        className="max-w-xs flex flex-col justify-center items-center gap-2 p-4 md:p-6 bg-white rounded-xl shadow-2xl space-y-3 md:space-y-4"
      >
        <h3
          data-aos="zoom-out-down"
          data-aos-duration="1300"
          className="text-lg md:text-xl font-semibold text-center "
        >
          Update Your Profile
        </h3>
        <div data-aos="zoom-out-down" data-aos-duration="1300">
          <input
            className="w-full h-full py-1.5 md:py-2 px-3 md:px-4 rounded-lg border border-primary outline-darkPri"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div data-aos="zoom-out-down" data-aos-duration="1300">
          <input
            className="w-full h-full py-1.5 md:py-2 px-3 md:px-4 rounded-lg border border-primary outline-darkPri"
            type="text"
            name="photoURL"
            placeholder="Your photoURL"
            required
          />
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-duration="1300"
          className="w-full"
        >
          <button
            type="submit"
            className="btn h-full w-full bg-primary hover:bg-darkPri"
          >
            Update
          </button>
        </div>

        <div data-aos="zoom-out-down" data-aos-duration="1300">
          <Link to="/profile" type="button" className="text-right py-1 px-2">
            Profile
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
