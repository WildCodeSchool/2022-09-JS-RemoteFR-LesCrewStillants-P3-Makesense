import { Link } from "react-router-dom";
import "@components/AcceuilDecision.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function AcceuilDecision() {
  return (
    <>
      <Header />
      <div className="BgDecision">
        <Link to="/">
          <p className="home"> Home </p>
        </Link>
        <h1>Décision en cours</h1>
        <hr className="ligne" />
        <div className="DecisionContainer">
          <div className="card">Card 1</div>
        </div>
        <h1>Décisions prises</h1>
        <hr className="ligne" />
        <div className="DecisionPrise">
          <div className="card">Card 1</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
