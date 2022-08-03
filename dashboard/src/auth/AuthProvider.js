import { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const [client, setClient] = useState("");
  const [clientid, setClientid] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("");
  const [projid, setProjid] = useState();
  const [idcheck, setIdcheck] = useState("");
  const [searchi, setSearchi] = useState(false);
  const contextValue = {
    user,
    id,
    client,
    clientid,
    role,
    type,
    projid,
    idcheck,
    searchi,
    setUser,
    setId,
    setClient,
    setClientid,
    setRole,
    setType,
    setProjid,
    setIdcheck,
    setSearchi,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
