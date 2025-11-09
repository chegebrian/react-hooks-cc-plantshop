import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { PlantsyProvider } from "../contexts/PlantsyContext";

function App() {
  return (
    <PlantsyProvider>
      <div className="app">
        <Header />
        <PlantPage />
      </div>
    </PlantsyProvider>
  );
}

export default App;
