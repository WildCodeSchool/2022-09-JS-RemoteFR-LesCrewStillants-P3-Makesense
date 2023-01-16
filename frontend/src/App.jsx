import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Decision from "./pages/PriseDecision";
import AccueilSalarie from "./pages/AccueilSalarie";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decision" element={<Decision />} />
        <Route path="/accueilsalarie" element={<AccueilSalarie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
