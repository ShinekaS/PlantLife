import React, { useState } from 'react';

const PlantImages = () => {
    const [indoorPlant, setindoorPlant] = useState('');
    const [poisonPlant, setPoisonPlant] = useState('');


    const generateIndoorPlant = () => {
        fetch('https://perenual.com/api/species-list?key=sk-1ZpB646a3c33a01e51007&indoor=1')
            .then(response => response.json())
            .then(data => {
                const name = data.data[0].common_name;
                const image = data.data[0].default_image;
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
                const image = data.data[0].default_image;
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
                <button onClick={generateIndoorPlant}>Indoor Plants</button>
                {indoorPlant && <img src={indoorPlant} alt="Random Plant" />}
            </div>
            <div>
                <button onClick={generatePoisonPlant}>Poisonous Plants</button>
                {poisonPlant && <img src={poisonPlant} alt="Random Plant" />}
            </div>
        </>
    );
};

export default PlantImages;
