import LoginSignupContainer from "../components/LoginSignupContainer/LoginSignupContainer";
import "../style/Pages.css";
import AccueilHeader from "../components/AccueilHeader";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <AccueilHeader />
      <div className="App">
        <h1 id="homeh1"> Bienvenue, viens on change de monde ! </h1>
        <LoginSignupContainer />
        <Footer />
      </div>
    </>
  );
}
