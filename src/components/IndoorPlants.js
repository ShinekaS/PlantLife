import React, { useState, useEffect } from 'react';

const IndoorPlants = () => {
  const [indoorPlants, setIndoorPlants] = useState([]);
  const [indoorPlantImages, setIndoorPlantImages] = useState([]);

  useEffect(() => {
    fetch('https://perenual.com/api/species-list?key=sk-1ZpB646a3c33a01e51007&indoor=1')
      .then(response => response.json())
      .then(data => {
        const plants = data.data;
        const plantImages = plants.map(plant => plant.default_image.original_url);
        setIndoorPlants(plants);
        setIndoorPlantImages(plantImages);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <div className="PlantCard">
        {indoorPlants.map((plant, index) => (
          <div key={plant.id}>
            <h3>{plant.common_name}</h3>
            {indoorPlantImages[index] && <img src={indoorPlantImages[index]} alt={plant.common_name} />}
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

export default IndoorPlants;
