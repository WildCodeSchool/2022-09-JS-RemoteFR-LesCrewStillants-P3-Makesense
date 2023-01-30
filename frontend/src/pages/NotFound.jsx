import { Player } from "@lottiefiles/react-lottie-player";
import AccueilHeader from "@components/AccueilHeader";
import Footer from "@components/Footer";
import { useNavigate } from "react-router-dom";
import notFound from "../style/lottie/notFound.json";
import "../style/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <AccueilHeader />
      <div className="notFoundContainer">
        <Player autoplay loop src={notFound} className="notFoundLottie" />
        <button onClick={() => navigate(-1)} type="button" className="pink">
          Retour
        </button>
      </div>
      <Footer />
    </>
  );
}
