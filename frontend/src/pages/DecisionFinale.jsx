import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import "../components/DecisionFinale.css";

function DecisionFinale() {
  const titles = [
    "Description de la décision",
    "Les détails de la décision",
    "Impact sur l'organisation",
    "Bénéfices",
    "Risques",
  ];

  return (
    <>
      <Header />
      {titles.map((titleH1) => (
        <div>
          <Accordion key={titleH1} title={titleH1} />
        </div>
      ))}
      <Footer />
    </>
  );
}

export default DecisionFinale;
