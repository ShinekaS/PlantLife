import React, { useState } from 'react';

const PlantImages = () => {
    const [indoorPlant, setindoorPlant] = useState('');
    const [poisonPlant, setPoisonPlant] = useState('');


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
    const generatePoisonPlant = () => {
        fetch('https://perenual.com/api/species-list?key=sk-1ZpB646a3c33a01e51007&poisonous=1')
            .then(response => response.json())
            .then(data => {
                const plants = data.data;
                const randomIndex = Math.floor(Math.random()* plants.length);
                const image = data.data[randomIndex].default_image;
                const poisonPlant = image.regular_url;
                setPoisonPlant(poisonPlant);
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
                {poisonPlant && <img src={poisonPlant} alt="Random Plant" />}
                <br/>
                <button onClick={generatePoisonPlant}>Poisonous Plants</button>
            </div>
        </>
    );
};

export default PlantImages;
