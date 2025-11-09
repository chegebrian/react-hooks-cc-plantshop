import React from "react";
import PlantCard from "./PlantCard";
import { usePlantsy } from "../contexts/PlantsyContext";

function PlantList() {
  const { plants } = usePlantsy();

  return (
    <ul className="cards">
      {plants?.map((plant, index) => (
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
