import Form from "./components/FormDecision";
import { DateContextProvider } from "./Context/DateContext";

import "./App.css";

function App() {
  return (
    <DateContextProvider>
      <div className="App">
        <Form />
      </div>
    </DateContextProvider>
  );
}

export default App;
