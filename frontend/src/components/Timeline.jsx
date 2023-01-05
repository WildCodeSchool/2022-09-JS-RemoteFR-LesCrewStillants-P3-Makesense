import React, { useContext, useState, useEffect } from "react";
import { Chrono } from "react-chrono";
// import items from "./Data";
import "./Timeline.css";
import { DateContext } from "../Context/DateContext";

function Timeline() {
  const { timeline } = useContext(DateContext);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(true);
  }, [timeline]);

  useEffect(() => {
    setReload(false);
  }, [reload]);

  return (
    <div style={{ width: "55%", height: "100%" }}>
      {!reload ? (
        <Chrono items={timeline} mode="HORIZONTAL" cardHeight={35} />
      ) : (
        "attend"
      )}
    </div>
  );
}

export default Timeline;
