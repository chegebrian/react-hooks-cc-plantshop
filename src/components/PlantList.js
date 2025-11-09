import React from "react";
import PlantCard from "./PlantCard";
import { usePlantsy } from "../contexts/PlantsyContext";

function PlantList() {
  // retrieve props using our custom usePlantsy hook
  const { filteredPlants } = usePlantsy();

  return (
    <ul className="cards">
      {filteredPlants?.map((plant, index) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          image={plant.image}
          price={plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
