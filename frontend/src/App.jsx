
import Form from "./components/FormDecision";
import { DateContextProvider } from "./Context/DateContext";


import { Routes, Route, BrowserRouter } from "react-router-dom";
import AcceuilDecision from "@pages/AcceuilDecision";
import Home from "./pages/Home";
import Decision from "./pages/PriseDecision";

import "./App.css";

function App() {
  return (

    <DateContextProvider>
      <div className="App">
        <Form />
      </div>
    </DateContextProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decision" element={<Decision />} />
        <Route path="/acceuilsalarie" element={<AcceuilDecision />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
