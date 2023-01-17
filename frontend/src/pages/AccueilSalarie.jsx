import "@components/AccueilSalarie.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function AccueilSalarie() {
  const decisions = [
    {
      id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <>
      <Header />
      <h1>Décisions en cours</h1>
      <div className="BgDecision">
        <div className="Decisions">
          {decisions.map((decision) => (
            <div key={decision.id} className="DecisionsCard">
              <div className="DecisionContainer">
                <div className="card">
                  Card 1<h1>{decision.title}</h1>
                  <p>{decision.desc_final}</p>
                  <p>{decision.details}</p>
                  <p>{decision.status}</p>
                  <p>{decision.user_id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="ligne" />
        <h1>Décisions prises</h1>
        <div className="DecisionPrise">
          <div className="card">Card 1</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
