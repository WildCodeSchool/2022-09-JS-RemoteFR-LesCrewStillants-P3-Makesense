import Footer from "./components/Footer";
import Deco from "@components/Decoration/Deco";
import LoginSignupContainer from "@components/LoginSignupContainer/LoginSignupContainer";
import NavBar from "@components/NavBar/NavBar";
import Form from "./components/FormDecision";
import "./App.css";

function App() {
  return (
    <div className="App">      
      <NavBar />
      <LoginSignupContainer />
      <Deco />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
