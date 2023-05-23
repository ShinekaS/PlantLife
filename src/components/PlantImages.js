import React, { useState } from 'react';

const PlantImages = () => {
    const [indoorPlant, setindoorPlant] = useState('');
    const [ediblePlant, setEdiblePlant] = useState('');


    const generateIndoorPlant = () => {
        fetch('https://perenual.com/api/species-list?key=sk-1ZpB646a3c33a01e51007&indoor=1')
            .then(response => response.json())
            .then(data => {
                const plants = data.data;
                const randomIndex = Math.floor(Math.random()* plants.length);
                const image = data.data[randomIndex].default_image;
                const indoorPlant = image.regular_url;
                setindoorPlant(indoorPlant);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    const generateEdiblePlant = () => {
        fetch('https://perenual.com/api/species-list?key=sk-1ZpB646a3c33a01e51007&edible=1')
            .then(response => response.json())
            .then(data => {
                const plants = data.data;
                const randomIndex = Math.floor(Math.random()* plants.length);
                const image = data.data[randomIndex].default_image;
                const ediblePlant = image.regular_url;
                setEdiblePlant(ediblePlant);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <div>
                {indoorPlant && <img src={indoorPlant} alt="Random Plant" />}
                <br/>
                <button onClick={generateIndoorPlant}>Indoor Plants</button>
                <br/>
            </div>
            <div>
                {ediblePlant && <img src={ediblePlant} alt="Random Plant" />}
                <br/>
                <button onClick={generateEdiblePlant}>Edible Plants</button>
            </div>
        </>
    );
};

export default PlantImages;
