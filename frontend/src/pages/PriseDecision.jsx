import { Link } from "react-router-dom";
import Form from "../components/FormDecision";

export default function Decision() {
  return (
    <div>
      <Link to="/">
        <p className="home"> Home </p>
      </Link>
      <Form />
    </div>
  );
}
