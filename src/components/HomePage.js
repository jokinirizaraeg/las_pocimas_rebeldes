import React from "react";
import axios from "axios"
import diceArray from "../images.js"
import potionImg from "../assets/potion.png"
import poisonImg from "../assets/poison.png"
import AppContext from '../context';




const HomePage = () => {


  const context = React.useContext(AppContext);


  return (
    <>
    {context?(<div>
    <h1 style={{textAlign:"center", marginTop:100}}>LAS PÓCIMAS REBELDES</h1>
    <button  style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      width:1000,
      height:90,
      fontSize:75,
      textAlign:"center",

  }} onClick={() => {context.handleGlobalState({page: "battle"})}} >ENTER</button>
  </div>):null}


  </>
  );


}

export default HomePage;


