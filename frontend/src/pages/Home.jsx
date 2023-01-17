import Deco from "../components/Decoration/Deco";
import LoginSignupContainer from "../components/LoginSignupContainer/LoginSignupContainer";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <LoginSignupContainer />
      <Deco />
      <Footer />
    </div>
  );
}
