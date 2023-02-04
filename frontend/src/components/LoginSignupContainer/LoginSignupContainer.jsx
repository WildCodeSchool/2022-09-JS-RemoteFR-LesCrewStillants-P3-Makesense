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
    <div className="DecoSignIn">
      <div className="Home">
        <div className="login-signup-container" ref={loginSignupContainerRef}>
          <Login />
          <div className="side-div">
            <button type="button" className="pink" onClick={handleClick}>
              {" "}
              {login ? "S'inscrire →" : "← Se connecter"}{" "}
            </button>
          </div>
          <Signup />
        </div>

        <div>
          <div className="orangeFatBean" />
          <div className="orangeSmallBean" />
          <img
            className="decoimg"
            src="https://makesense.org/wp-content/uploads/sites/4/2020/09/2015-10-24-sensecamp-washington-dc-picture-by-mariia-berezina-photography-8-1.jpg"
            alt="équipe"
          />
          <img
            className="decologo"
            src="https://makesense.org/wp-content/uploads/sites/4/2020/09/logo-makesense-dark.png"
            alt="logo"
          />
          <div className="blueFatBean" />
          <div className="blueSmallBean" />
        </div>
      </div>
    </div>
  );
}

export default LoginSignupContainer;
