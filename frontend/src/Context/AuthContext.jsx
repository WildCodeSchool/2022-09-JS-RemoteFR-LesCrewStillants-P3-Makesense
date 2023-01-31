import jwtDecode from "jwt-decode";
import { createContext, useState, useMemo } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthContextProvider({ children }) {
  const [userID, setUserId] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleUserAuth = () => {
    const getDataAuth = localStorage.getItem("token");

    if (getDataAuth) {
      const decodeToken = jwtDecode(getDataAuth);
      setUserId(decodeToken.id);
      setUserRole(decodeToken.user_role);
    } else {
      console.warn("Not logged");
    }
  };

  const value = useMemo(
    () => ({
      userID,
      userRole,
      handleUserAuth,
    }),
    [userID, userRole, handleUserAuth]
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
