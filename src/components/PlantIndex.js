import React, { useEffect, useState } from "react";

const PlantIndex = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://perenual.com/plant-survey-quiz-test");
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h6>Indoor Plant Options</h6>
      <h6>Outdoor Plant Options</h6> */}
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlantIndex;
