import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import notFound from '../style/lottie/notFound.json';
import AccueilHeader from '@components/AccueilHeader';
import Footer from '@components/Footer';
import "../style/NotFound.css";

export default function NotFound() {
  return (
    <>
      <AccueilHeader />
      <div className="notFoundContainer">
        <Player autoplay loop src={notFound} className="notFoundLottie" />
        <Link to="/">
          <button type="button" className="pink">
            Retour
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

