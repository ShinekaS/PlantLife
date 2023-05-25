import React, { useState } from 'react';
import './App.css';
import EdiblePlant from './components/EdiblePlant';
import IndoorPlants from './components/IndoorPlants';
import Greeting from './components/Greeting';
import PlantImages from './components/PlantImages';
import PlantIndex from './components/PlantIndex';
import { Routes, Route, Link} from 'react-router-dom';



function ResetPage() {
  // adds a link to reset the page, rather than a Home page link


  return null;
}

function App() {
  return (
   

    
    <>
    {/* Forms still need to be created for this link to truley function */}
<button className="submit" type="submit">Sign Up</button>
<br></br>
<br></br>
<button className="submit" type="submit">Login</button>

      <div className="App">
        <h1>🍃Plant Life!🌿</h1>
        <Greeting />
        <PlantIndex />
      <Link to='/indoorPlants'>Indoor Plant</Link>
      <br />
      <Link to='/ediblePlant'>Edible Plants</Link>
      <br />
        <Link to='/reset'>Clear Page</Link>
      {/* <IndoorPlants /> */}
        {/* <PlantImages /> */}
      </div>

      <Routes>
        <Route path='/indoorPlants' element={<IndoorPlants/>} />
        <Route path='/ediblePlant' element={<EdiblePlant />} />
        <Route path='/reset' element={<ResetPage />} />

      </Routes>
      <hr />

      <EdiblePlant />
      <hr />

    </>

    
  );
}



export default App;
