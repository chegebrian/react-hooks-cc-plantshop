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

  const data = {
    name: plantName,
    image: plantImage,
    price: plantPrice,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(plantName, plantImage, plantPrice);
    fetch("http://localhost:6001/plants", options)
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("unable to post data");
        }
        // Parse the response body as JSON
        return response.json();
      })
      .then((data) => {
        // Handle the successful response data
        console.log("Success:", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plantName}
          onChange={handlePlantName}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plantImage}
          onChange={handlePlantImage}
          required
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plantPrice}
          onChange={handlePlantPrice}
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
