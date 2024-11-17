/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const ProviderContext = createContext();
const Provider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const info = {
    setShow,
    show,
    user,
    setUser,
    error,
    setError,
  };
  return (
    <ProviderContext.Provider value={info}>{children}</ProviderContext.Provider>
  );
};

export default Provider;
