import React, { useState, useEffect } from 'react';

const IndoorPlants = () => {
  const [indoorPlants, setIndoorPlants] = useState([]);
  const [indoorPlantImages, setIndoorPlantImages] = useState([]);

  useEffect(() => {
    fetch('https://perenual.com/api/species-list?key=sk-Q286646f60c4cf4c11050&indoor=1')
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
            <h4>{plant.common_name}</h4>
            <div className='imgContainer'>
            {indoorPlantImages[index] && <img src={indoorPlantImages[index]} alt={plant.common_name} />}
            </div>
            <article className="cardbody">
              <h6>Botanical Name: {plant.scientific_name}</h6>
              <h6>Cycle: {plant.cycle}</h6>
              <h6>Watering: {plant.watering}</h6>
              <h6>Sunlight: {plant.sunlight}</h6>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};

export default IndoorPlants;
