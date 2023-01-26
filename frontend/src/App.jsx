import { Route, Routes, BrowserRouter } from "react-router-dom";
import AccueilAdmin from "./pages/AccueilAdmin";
import Home from "./pages/Home";
import Decision from "./pages/PriseDecision";
import AccueilSalarie from "./pages/AccueilSalarie";
import DecisionFinale from "./pages/DecisionFinale";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decision" element={<Decision />} />
        <Route path="/accueilsalarie" element={<AccueilSalarie />} />
        <Route path="/accueiladmin" element={<AccueilAdmin />} />
        <Route path="/decisionfinale" element={<DecisionFinale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
