import React from "react";
import PlantCard from "./PlantCard";
import { usePlantsy } from "../contexts/PlantsyContext";

function PlantList() {
  const { plants } = usePlantsy();
  console.log(plants);

  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
