import "./Deco.css";

function Deco() {
  return (
    <div>
      <h2 className="decoration">Viens on change de monde!</h2>
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
        className="decovoiderose"
        src="./src/components/Decoration/ovoideRose.png"
        alt="deco"
      />
      <img
        className="decovoidebleu"
        src="./src/components/Decoration/ovoide_bleu.png"
        alt="deco"
      />
    </div>
  );
}

export default Deco;