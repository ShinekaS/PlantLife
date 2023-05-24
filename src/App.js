import React from 'react';
import './App.css';
import EdiblePlant from './components/EdiblePlant';
import IndoorPlants from './components/IndoorPlants';
import Greeting from './components/Greeting';
import PlantImages from './components/PlantImages';
import PlantIndex from './components/PlantIndex';



function App() {
  return (
    <>
      <div className="App">
        <h1>🍃Plant Life!🌿</h1>
    <Greeting />
    <PlantIndex />
    <PlantImages />
      </div>
<hr />

    <EdiblePlant />
    <hr />
    <IndoorPlants />
    </>

    
  );
}

export default App;
