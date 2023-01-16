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
          <Link to="/">
            <p className="home">Home</p>
          </Link>
          <Form />
        </div>
      </DataContextProvider>
    </DateContextProvider>

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
