import { Link } from "react-router-dom";
import Header from "@components/Header";
import Form from "../components/FormDecision";

export default function Decision() {
  return (
    <div>
      <Header />
      <Link to="/">
        <p className="home"> Home </p>
      </Link>
      <Form />
    </div>
  );
}
