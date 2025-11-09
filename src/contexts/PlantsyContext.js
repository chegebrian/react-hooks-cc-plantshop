import React, { createContext, useContext, useEffect, useState } from "react";

const plantsyContext = createContext();

function PlantsyProvider({ children }) {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");
  function handleQuery(e) {
    setQuery(e.target.value);
  }
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState();

  function handlePlantImage(e) {
    setPlantImage(e.target.value);
  }
  function handlePlantPrice(e) {
    setPlantPrice(e.target.value);
  }
  function handlePlantName(e) {
    setPlantName(e.target.value);
  }
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
  const filteredPlants = plants?.filter((plant) =>
    plant.name.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <plantsyContext.Provider
      value={{
        filteredPlants,
        query,
        handleQuery,
        handlePlantImage,
        handlePlantName,
        handlePlantPrice,
        plantImage,
        plantName,
        plantPrice,
      }}
    >
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
