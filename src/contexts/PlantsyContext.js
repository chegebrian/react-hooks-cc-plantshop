import React, { createContext, useContext, useEffect, useState } from "react";

const plantsyContext = createContext();

function PlantsyProvider({ children }) {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:6001/plants");
        const data = await response.json();
        setPlants(data);
      } catch (error) {}
    }
    fetchData();
  }, [setPlants]);
  return (
    <plantsyContext.Provider value={{ plants }}>
      {children}
    </plantsyContext.Provider>
  );
}

function usePlantsy() {
  const context = useContext(plantsyContext);
  if (context === undefined)
    throw new Error("plantsyContext was used outside of its provider");
  return context;
}

export { usePlantsy, PlantsyProvider };
