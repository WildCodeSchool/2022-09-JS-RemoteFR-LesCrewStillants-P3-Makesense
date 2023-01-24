import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthContextProvider({ children }) {
  const [userID, setUserId] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleUserAuth = () => {
    const getDataAuth = localStorage.getItem("token");
    const decodeToken = jwtDecode(getDataAuth);
    setUserId(decodeToken.id);
    setUserRole(decodeToken.user_role);
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ userID, userRole, handleUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
