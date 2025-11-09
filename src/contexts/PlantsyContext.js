import React, { createContext, useContext } from "react";

const plantsyContext = createContext();

function PlantsyProvider({ children }) {
  return (
    <plantsyContext.Provider value={{}}>{children}</plantsyContext.Provider>
  );
}

function usePlantsy() {
  const context = useContext(plantsyContext);
  if (context === undefined)
    throw new Error("plantsyContext was used outside of its provider");
  return context;
}

export { usePlantsy, PlantsyProvider };
