import Header from "../components/Header";
import Form from "../components/FormDecision";
import { DateContextProvider } from "../Context/DateContext";
import { DataContextProvider } from "../Context/DataContext";

function PriseDecision() {
  return (
    <DateContextProvider>
      <DataContextProvider>
        <Header />
        <div className="PriseDecision">
          <Form />
        </div>
      </DataContextProvider>
    </DateContextProvider>
  );
}

export default PriseDecision;
