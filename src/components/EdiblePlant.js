import React, { useState, useEffect } from 'react';

const EdiblePlant = () => {
  const [ediblePlants, setEdiblePlants] = useState([]);
  const [ediblePlantImages, setEdiblePlantImages] = useState([]);

  useEffect(() => {
    fetch('https://perenual.com/api/species-list?key=sk-BCUO646e567031eb11041&edible=1')
      .then(response => response.json())
      .then(data => {
        const plants = data.data;
        const plantImages = plants.map(plant => plant.default_image.original_url);
        setEdiblePlants(plants);
        setEdiblePlantImages(plantImages);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
    <div className="PlantCard">
      {ediblePlants.map((plant, index) => (
          <div key={plant.id}>
          <h4>{plant.common_name}</h4>
          <div className='imgContainer'>
          {ediblePlantImages[index] && <img src={ediblePlantImages[index]} alt={plant.common_name} />}
          </div>
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
