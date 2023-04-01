import "./App.css";
import React from "react";
import Team from "./components/Team";
import FrontPage from "./components/FrontPage";
import Despre from "./components/Despre";
import Sectiuni from "./components/Sectiuni";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Noutati from "./components/Noutati";
 
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage/>}/>
          <Route path='/despre' element={<Despre/>}/>
          <Route path='/sectiuni' element={<Sectiuni/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;