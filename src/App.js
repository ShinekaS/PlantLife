import React from 'react';
import './App.css';
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

    </>
  );
}

export default App;
