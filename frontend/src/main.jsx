import React from "react";
import ReactDOM from "react-dom/client";
import { DataContext } from "./Context/DataContext";
import { DateContext } from "./Context/DateContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataContext.Provider>
      <DateContext.Provider>
        <App />
      </DateContext.Provider>
    </DataContext.Provider>
  </React.StrictMode>
);
