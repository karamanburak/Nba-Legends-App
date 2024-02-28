import './App.css';
import React from 'react'
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import PlayerCard from './components/PlayerCard';


import {data} from './helper/data';

const App = () => {
  return (
    <div>

    <Header/>
    {/* <CardContainer/> */}
    <PlayerCard data={data}/>
    </div>
  )
}

export default App
