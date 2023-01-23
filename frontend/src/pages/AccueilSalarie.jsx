import "@components/AccueilSalarie.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function AccueilSalarie() {
  const decisionsEnCours = [
    {
      id: "1",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "2",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "3",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "4",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "5",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "6",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "7",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  const decisionsPrises = [
    {
      id: "1",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "2",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "3",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "4",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "5",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "6",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: "7",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <>
      <Header />
      <div className="BgDecision">
        <div className="Decisions">
          <h1>Mes Décisions</h1>
          {decisionsEnCours.map((decision) => (
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
      </div>
      <hr className="ligne" />
      <div className="BgDecision">
        <div className="Decisions">
          <h1>Décisions en cours</h1>
          {decisionsEnCours.map((decision) => (
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
      </div>
      <hr className="ligne" />
      <div className="BgDecision">
        <div className="Decisions">
          <h1>Décisions prises</h1>
          {decisionsPrises.map((decision) => (
            <div key={decision.id} className="DecisionsCard">
              <div className="DecisionContainer">
                <div className="card">
                  Card 2<h1>{decision.title}</h1>
                  <p>{decision.desc_final}</p>
                  <p>{decision.details}</p>
                  <p>{decision.status}</p>
                  <p>{decision.user_id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
