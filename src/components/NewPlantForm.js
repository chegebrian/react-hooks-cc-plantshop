import React from "react";
import { usePlantsy } from "../contexts/PlantsyContext";

function NewPlantForm() {
  const {
    plantName,
    plantImage,
    plantPrice,
    handlePlantImage,
    handlePlantName,
    handlePlantPrice,
  } = usePlantsy();
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantName}
          onChange={handlePlantName}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plantImage}
          onChange={handlePlantImage}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantPrice}
          onChange={handlePlantPrice}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
