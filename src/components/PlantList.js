import React from "react";
import PlantCard from "./PlantCard";
import { usePlantsy } from "../contexts/PlantsyContext";

function PlantList() {
  const { plants } = usePlantsy();
  console.log(plants);

  return (
    <ul className="cards">
      {plants?.map((plant, index) => (
        <PlantCard key={plant.id}/>
      ))}
    </ul>
  );
}

export default PlantList;
