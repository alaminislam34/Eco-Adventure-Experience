/* eslint-disable react/prop-types */

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const ProviderContext = createContext();
const Provider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Id, setId] = useState();
  const handleDetailsId = (id) => {
    setId(id);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => unSubscribe();
    });
  }, []);

  const info = {
    setShow,
    show,
    user,
    setUser,
    error,
    setError,
    data,
    setData,
    loading,
    setLoading,
    Id,
    handleDetailsId,
  };
  return (
    <ProviderContext.Provider value={info}>{children}</ProviderContext.Provider>
  );
};

export default Provider;
