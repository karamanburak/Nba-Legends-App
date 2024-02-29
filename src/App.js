import './App.css';
import React from 'react'
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';


import {data} from './helper/data';

const App = () => {
  return (
    <div>

    <Header/>
    <PlayerCard data={data}/>
    </div>
  )
}

export default App
