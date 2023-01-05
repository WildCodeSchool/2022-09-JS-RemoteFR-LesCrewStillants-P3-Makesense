import "@components/AccueilSalarie.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function AccueilSalarie() {
  return (
    <>
      <Header />
      <div className="BgDecision">
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
