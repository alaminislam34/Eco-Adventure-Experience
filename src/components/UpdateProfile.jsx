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
        navigate("/userProfile");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-6 ">
      <form
        onSubmit={handleUpdateProfile}
        className="max-w-xs flex flex-col justify-center items-center gap-2 p-4 bg-primary *:py-1 md:*:py-2 *:text-xs md:*:text-sm lg:*:text-base *:px-2 md:*:px-4 rounded-xl shadow-2xl"
      >
        <h3 className="text-lg md:text-xl font-semibold text-center ">
          Update Your Profile
        </h3>
        <input type="text" name="name" placeholder="Your name" required />
        <input
          type="text"
          name="photoURL"
          placeholder="Your photoURL"
          required
        />
        <button type="submit" className="btn w-full">
          Update
        </button>

        <Link to="/userProfile" type="button" className="text-right py-1 px-2">
          Close
        </Link>
      </form>
    </div>
  );
};

export default UpdateProfile;
