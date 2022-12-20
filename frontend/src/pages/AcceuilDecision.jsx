import { Link } from "react-router-dom";
import "@components/AcceuilDecision.css";
import Footer from "@components/Footer";

export default function AcceuilDecision() {
  return (
    <div className="BgDecision">
      <Link to="/">
        <p className="home"> Home </p>
      </Link>
      <h1>Décision en cours</h1>
      <hr className="ligne" />
      <div className="DecisionContainer">
        <div className="card">Card 1</div>
        {/* <div class="card">Card 2</div>
              <div class="card">Card 3</div>
              <div class="card">Card 4</div>
              <div class="card">Card 5</div>
              <div class="card">Card 6</div> */}
      </div>
      <h1>Décisions prises</h1>
      <hr className="ligne" />
      <div className="DecisionPrise">
        <div className="card">Card 1</div>
        {/* <div class="card">Card 2</div>
              <div class="card">Card 3</div>
              <div class="card">Card 4</div>
              <div class="card">Card 5</div>
              <div class="card">Card 6</div> */}
      </div>
      <Footer />
    </div>
  );
}
