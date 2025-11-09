import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { PlantsyProvider } from "../contexts/PlantsyContext";

function App() {
  return (
    // wrap the components using the PlantsyProvider so as to get access to props in the PlantsyContext
    <PlantsyProvider>
      <div className="app">
        <Header />
        <PlantPage />
      </div>
    </PlantsyProvider>
  );
}

export default App;
