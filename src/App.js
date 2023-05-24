import React from 'react';
import './App.css';
import EdiblePlant from './components/EdiblePlant';
import IndoorPlants from './components/IndoorPlants';
import Greeting from './components/Greeting';
import PlantImages from './components/PlantImages';
import PlantIndex from './components/PlantIndex';
import { Routes, Route, Link} from 'react-router-dom';




function App() {
  return (
   

    
    <>
      <div className="App">
        <h1>🍃Plant Life!🌿</h1>
        <Greeting />
        <PlantIndex />
      <Link to='/indoorPlants'>Indoor Plant</Link>
      <br />
      <Link to='/ediblePlant'>Edible Plants</Link>
      {/* <IndoorPlants /> */}
        {/* <PlantImages /> */}
      </div>

      <Routes>
        <Route path='/indoorPlants' element={<IndoorPlants/>} />
        <Route path='/EdiblePlant' element={<EdiblePlant />} />
        
      </Routes>
      <hr />

      <EdiblePlant />
      <hr />

    </>

    
  );
}



export default App;
