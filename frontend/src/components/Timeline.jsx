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
    <div style={{ width: "40%", height: "100%", background: "none" }}>
      {!reload ? (
        <Chrono
          items={timeline}
          mode="HORIZONTAL"
          theme={{
            primary: "#196c84",
            secondary: "#196c84",
            cardBgColor: "none",
            titleColor: "black",
            titleColorActive: "white",
          }}
          cardHeight={30}
        />
      ) : (
        "attend"
      )}
    </div>
  );
}

export default Timeline;
