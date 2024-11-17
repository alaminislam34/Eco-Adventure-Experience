/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ProviderContext = createContext();
const Provider = ({ children }) => {
  const [show, setShow] = useState(false);
  const info = {
    setShow,
    show,
  };
  return (
    <ProviderContext.Provider value={info}>{children}</ProviderContext.Provider>
  );
};

export default Provider;
