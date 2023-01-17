import React, { createContext, useState } from "react";

const DataContext = createContext("");

// eslint-disable-next-line react/prop-types
function DataContextProvider({ children }) {
  // permet d'afficher la date sélectionner dans le navigateur
  const [data, setData] = useState({});
  // isUpdated permet de lancer le useEffect et ainsi, ajouter la nouvelle date dans la timeline
  // const [isUpdated, setIsUpdated] = useState(false);
  const decisionData = {};

  const handleDataChange = (entriesData) => {
    decisionData[entriesData.id] = {
      data: entriesData.data,
    };

    setData({ ...data, ...decisionData });

    console.warn(data);
  };
  console.log(data);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={{ handleDataChange }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
