import Deco from "@components/Decoration/Deco";
import Footer from "@components/Footer/Footer";
import LoginSignupContainer from "@components/LoginSignupContainer/LoginSignupContainer";
import NavBar from "@components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginSignupContainer />
      <Deco />
      <Footer />
    </div>
  );
}

export default App;
