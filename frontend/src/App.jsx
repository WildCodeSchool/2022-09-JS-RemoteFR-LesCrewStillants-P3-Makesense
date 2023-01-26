import { Route, Routes, BrowserRouter } from "react-router-dom";
import AccueilAdmin from "./components/AdminRegister";
import Home from "./pages/Home";
import Decision from "./pages/PriseDecision";
import AccueilSalarie from "./pages/AccueilSalarie";
import Admin from "./pages/Admin";
import DecisionFinale from "./pages/DecisionFinale";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decision" element={<Decision />} />
        <Route path="/accueil-salarie" element={<AccueilSalarie />} />
        <Route path="/decisionfinale" element={<DecisionFinale />} />
        <Route path="/accueil-admin" element={<AccueilAdmin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
