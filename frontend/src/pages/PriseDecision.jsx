import Header from "@components/Header";
import Form from "../components/FormDecision";
import { DateContextProvider } from "../Context/DateContext";

function PriseDecision() {
  return (
    <>
      <Header />
      <DateContextProvider>
        <div className="PriseDecision">
          <Form />
        </div>
      </DateContextProvider>
    </>
  );
}

export default PriseDecision;
