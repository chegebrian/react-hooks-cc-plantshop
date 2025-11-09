import React, { createContext, useContext, useEffect, useState } from "react";

const plantsyContext = createContext();

function PlantsyProvider({ children }) {
  // useState
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  // handler functions
  function handleQuery(e) {
    setQuery(e.target.value);
  }
  function handlePlantImage(e) {
    setPlantImage(e.target.value);
  }
  function handlePlantPrice(e) {
    setPlantPrice(e.target.value);
  }
  function handlePlantName(e) {
    setPlantName(e.target.value);
  }

  // useEffect to enable perform side effects such as fetching data
  // pass plants into our dependency array so as to refetch once we add another plant to our database
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:6001/plants");
        const data = await response.json();
        setPlants(data);
      } catch (error) {}
    }
    fetchData();
  }, [plants, setPlants]);
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

// custom hook to enable to retrieve data from the useContext
function usePlantsy() {
  const context = useContext(plantsyContext);
  if (context === undefined)
    throw new Error("plantsyContext was used outside of its provider");
  return context;
}

export { usePlantsy, PlantsyProvider };
