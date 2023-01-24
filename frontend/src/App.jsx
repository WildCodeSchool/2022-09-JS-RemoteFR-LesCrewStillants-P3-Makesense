import { Route, Routes, BrowserRouter } from "react-router-dom";
import AccueilAdmin from "./pages/AccueilAdmin";
import Home from "./pages/Home";
import Decision from "./pages/PriseDecision";
import AccueilSalarie from "./pages/AccueilSalarie";
import { AuthContextProvider } from "./Context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decision" element={<Decision />} />
          <Route path="/accueil-salarie" element={<AccueilSalarie />} />
          <Route path="/accueil-admin" element={<AccueilAdmin />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
