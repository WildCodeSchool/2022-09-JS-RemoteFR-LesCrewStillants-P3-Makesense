import Signup from "@components/Signup/Signup";
import Login from "@components/LoginSignupContainer/Login/Login";
import { useRef, useState } from "react";
import "./LoginSignupContainer.css";

function LoginSignupContainer() {
  const [login, setLogin] = useState(true);

  const loginSignupContainerRef = useRef(null);

  const handleClick = () => {
    setLogin(!login);

    loginSignupContainerRef.current.classList.toggle("active");
  };

  return (
    <div className="login-signup-container" ref={loginSignupContainerRef}>
      <Login />
      <div className="side-div">
        <button type="button" onClick={handleClick}>
          {" "}
          {login ? "S'inscire" : "Se connecter"}{" "}
        </button>
      </div>
      <Signup />
    </div>
  );
}

export default LoginSignupContainer;
