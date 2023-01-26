import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPut from "@components/AdminPut";
import AccueilAdmin from "./pages/AccueilAdmin";
import Home from "./pages/Home";
import Decision from "./pages/PriseDecision";
import AccueilSalarie from "./pages/AccueilSalarie";
import DecisionFinale from "./pages/DecisionFinale";
import NotFound from "./pages/NotFound";
import { AuthContextProvider } from "./Context/AuthContext";
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
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decision" element={<Decision />} />
          <Route path="/accueil-salarie" element={<AccueilSalarie />} />
          <Route path="/accueil-admin" element={<AccueilAdmin />} />
          <Route path="/users/:id" element={<AdminPut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
