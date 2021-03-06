import React, { useEffect } from 'react';
import {Route, Routes, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Players from './pages/Players';
import PlayerInfo from './pages/PlayerInfo';
import Games from './pages/Games'
import GameInfo from './pages/GameInfo';
import Studios from './pages/Studios';
import StudioInfo from './pages/StudioInfo';
import { useNavigate } from 'react-router-dom';

import {useState} from 'react';

import testgames from './test-data/games';



function App(pool) {
  const navigate = useNavigate();
  const pholder = {username: "kaushik",  email: "pahujak@oregonstate.edu", phone: "1234567890", birthdate: "02/22/2002"};
  const [PlayerToView, setPlayerToView]=useState();
  const [StudioToView, setStudioToView]=useState();
  const [GameToView, setGameToView]=useState();

  const PORT = 19866;

  const SetPlayer = async (target)=>{
    console.log("I'm really trying here.");
    console.log(target);
    setPlayerToView(target);
    console.log("checking if it really changed");
    console.log(PlayerToView);
    navigate("/PlayerInfo");
  }

  const SetStudio = async(target) => {
    console.log(`setting studio to ${target}`);
    setStudioToView(target);
    //if(target !== undefined) navigate("/StudioInfo");
  }

  const SetGame = async(target) => {
    console.log(`setting game to ${target}`);
    setGameToView(target);
    //if(target !== undefined) navigate("/GameInfo")
  }
  
  useEffect(() =>{
    console.log("something changed.");
    console.log(PlayerToView);
  }, [PlayerToView])
  
  return (
    <div className="App">
      
      <div className="App-header">
        <Link to="\">Home</Link>
        <Routes>
          <Route path="/" element={<HomePage PORT={PORT}/>}></Route>
          <Route path="/Players" element={<Players/>}/>
          <Route path="/PlayerInfo/:id" element={<PlayerInfo/>}/>
          <Route path="/Studios" element={<Studios/>}/>
          <Route path="/StudioInfo/:id" element={<StudioInfo/>}/>
          <Route path="/Games" element={<Games/>}/>
          <Route path="/GameInfo/:id" element={<GameInfo/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
