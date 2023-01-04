import { Link } from "react-router-dom";
import Form from "../components/FormDecision";
import { DateContextProvider } from "../Context/DateContext";

function PriseDecision() {
  return (
    <DateContextProvider>
      <div className="PriseDecision">
        <Link to="/">
          <p className="home">Home</p>
        </Link>
        <Form />
      </div>
    </DateContextProvider>
  );
}

export default PriseDecision;
