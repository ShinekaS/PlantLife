import React, { useState, useEffect } from 'react';

const EdiblePlant = () => {
  const [ediblePlants, setEdiblePlants] = useState([]);
  const [ediblePlantImages, setEdiblePlantImages] = useState([]);

  useEffect(() => {
    fetch('https://perenual.com/api/species-list?key=sk-Q286646f60c4cf4c11050&edible=1')
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
          <h4 className='comName' >{plant.common_name}</h4>
          <div className='imgContainer'>
          {ediblePlantImages[index] && <img src={ediblePlantImages[index]} alt={plant.common_name} />}
          </div>
          <article className="cardbody">
            <h6 className='ptInfo1'>Botanical Name: {plant.scientific_name}</h6>
            <h6 className='ptInfo2'>Cycle: {plant.cycle}</h6>
            <h6 className='ptInfo3'>Watering: {plant.watering}</h6>
            <h6 className='ptInfo4'>Sunlight: {plant.sunlight}</h6>
          </article>
        </div>
      ))}
      </div>
    </>
  );
};

export default EdiblePlant;
