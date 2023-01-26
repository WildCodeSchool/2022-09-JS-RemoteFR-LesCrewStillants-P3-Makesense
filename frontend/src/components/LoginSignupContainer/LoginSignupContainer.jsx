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
          <img
            className="decovoiderose"
            src="./src/components/Decoration/ovoideRose.png"
            alt="deco"
          />
          <img
            className="decovoidebleu"
            src="./src/components/Decoration/ovoide_bleu.png"
            alt="deco"
          />
          <img
            className="decoimg"
            src="./src/components/Decoration/mkimg.jpg"
            alt="équipe"
          />
          <img
            className="decologo"
            src="./src/components/Decoration/logomk.png"
            alt="logo"
          />
          <img
            className="decovoiderose2"
            src="./src/components/Decoration/ovoideRose.png"
            alt="deco"
          />
          <img
            className="decovoidebleu2"
            src="./src/components/Decoration/ovoide_bleu.png"
            alt="deco"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginSignupContainer;
