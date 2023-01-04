import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Decision from "./pages/PriseDecision";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decision" element={<Decision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
