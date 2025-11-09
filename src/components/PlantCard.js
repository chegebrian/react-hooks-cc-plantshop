import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isTrue, setIsTrue] = useState(true);
  function handleStock() {
    setIsTrue((isTrue) => !isTrue);
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isTrue ? (
        <button className="primary" onClick={handleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
