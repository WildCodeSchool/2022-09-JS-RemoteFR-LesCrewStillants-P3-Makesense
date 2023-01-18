import { createContext, useState } from "react";
import cookie from "js-cookie";
import jwtDecode from "jwt-decode";

const UserRoleContext = createContext("");

// eslint-disable-next-line react/prop-types
function UserRoleContextProvider({ children }) {
  const [userRole, setUserRole] = useState("");
  const token = cookie.get("token");

  // eslint-disable-next-line no-unused-vars
  const decodeRole = () => {
    if (token) {
      setUserRole(jwtDecode(token.user_role));
    }
    console.warn(userRole);
    console.warn(token);
  };

  return (
    <UserRoleContext.Provider value={(userRole, token)}>
      {children}
    </UserRoleContext.Provider>
  );
}

export { UserRoleContextProvider, UserRoleContext };
