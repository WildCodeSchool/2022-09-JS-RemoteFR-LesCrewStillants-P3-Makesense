import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminPut from "./components/AdminPut";
import AccueilAdmin from "./pages/AccueilAdmin";
import Profil from "./pages/Profil";
import Home from "./pages/Home";
import Decision from "./pages/PriseDecision";
import AccueilSalarie from "./pages/AccueilSalarie";
import DecisionDetails from "./pages/DecisionDetails";
import NotFound from "./pages/NotFound";
import { AuthContextProvider } from "./Context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accueil-salarie" element={<AccueilSalarie />} />
          <Route path="/accueil-admin" element={<AccueilAdmin />} />
          <Route path="/decisions" element={<Decision />} />
          <Route path="/decisions/:id" element={<DecisionDetails />} />
          <Route path="/users/:id" element={<AdminPut />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
