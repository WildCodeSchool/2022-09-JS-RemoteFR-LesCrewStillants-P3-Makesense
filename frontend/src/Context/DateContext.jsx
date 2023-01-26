import React, { createContext, useState, useEffect } from "react";

const DateContext = createContext();

// eslint-disable-next-line react/prop-types
function DateContextProvider({ children }) {
  // permet d'afficher la date sélectionner dans le navigateur
  const [nativeDate, setNativeDate] = useState({});
  // isUpdated permet de lancer le useEffect et ainsi, ajouter la nouvelle date dans la timeline
  const [isUpdated, setIsUpdated] = useState(false);
  const [timeline, setTimeline] = useState([]);
  const decisionDate = {};

  useEffect(() => {
    Object.entries(nativeDate).map((arr) => setTimeline([...timeline, arr[1]]));
  }, [isUpdated]);

  const handleDateChange = (e) => {
    const idForm = e.target.id;
    decisionDate[idForm] = {
      title: new Date(e.target.value).toLocaleDateString("fr-FR"),
      cardTitle: e.target.name,
    };
    setNativeDate({ ...nativeDate, ...decisionDate });
    setIsUpdated(!isUpdated);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DateContext.Provider value={{ nativeDate, handleDateChange, timeline }}>
      {children}
    </DateContext.Provider>
  );
}

export { DateContext, DateContextProvider };
