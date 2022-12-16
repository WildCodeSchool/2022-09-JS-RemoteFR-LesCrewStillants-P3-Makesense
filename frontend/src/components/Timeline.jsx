import { Chrono } from "react-chrono";
import items from "./Data";
import "./Timeline.css";

function Timeline() {
  return (
    <div style={{ width: "25%", height: "100%" }}>
      <Chrono items={items} mode="VERTICAL" cardHeight={35} />
    </div>
  );
}

export default Timeline;
