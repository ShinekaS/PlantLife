import React, { useState, useEffect } from 'react';

const EdiblePlant = () => {
  const [ediblePlants, setEdiblePlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://perenual.com/api/species-list?key=sk-1ZpB646a3c33a01e51007');
        const data = await response.json();
        const edibleDetails = data.data;
        setEdiblePlants(edibleDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="PlantCard">
      {ediblePlants.map((plant, index) => (
          <div key={plant.id}>
          <h3>{plant.common_name}</h3>
          {ediblePlants[index] && <img src={ediblePlants[index]} alt={plant.common_name} />}
          <article className="cardbody">
            <p>Botanical Name: {plant.scientific_name}</p>
            <p>Cycle: {plant.cycle}</p>
            <p>Watering: {plant.watering}</p>
            <p>Sunlight: {plant.sunlight}</p>
          </article>
        </div>
      ))}
      </div>
    </>
  );
};

export default EdiblePlant;
