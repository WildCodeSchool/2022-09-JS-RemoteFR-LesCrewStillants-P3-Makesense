import { Link } from "react-router-dom";
import Deco from "../components/Decoration/Deco";
import LoginSignupContainer from "../components/LoginSignupContainer/LoginSignupContainer";
import NavBar from "../components/NavBar/NavBar";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <NavBar />
      <LoginSignupContainer />
      <Deco />
      <Link to="/decision">
        <p className="home"> Poster une décision</p>
      </Link>
      <Footer />
    </div>
  );
}
