/* eslint-disable react/prop-types */

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const ProviderContext = createContext();
const Provider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
      return () => unSubscribe();
    });
  }, []);
  const googleProvider = new GoogleAuthProvider();
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const info = {
    setShow,
    show,
    user,
    setUser,
    error,
    setError,
    signUpWithGoogle,
  };
  return (
    <ProviderContext.Provider value={info}>{children}</ProviderContext.Provider>
  );
};

export default Provider;
