import Deco from "../components/Decoration/Deco";
import LoginSignupContainer from "../components/LoginSignupContainer/LoginSignupContainer";
import PageStyle from "../style/Pages.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
  <h1> Bienvenue, viens on change de monde ! </h1>
      <LoginSignupContainer />
     {/* <Deco />*/}
      <Footer />
    </div>
  );
}
