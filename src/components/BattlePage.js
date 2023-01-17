import React from "react";
import axios from "axios"
import diceArray from "../images.js"
import potionImg from "../assets/potion.png"
import poisonImg from "../assets/poison.png"
import AppContext from '../context';




const BattlePage = () => {


  const context = React.useContext(AppContext);
  return (
    <>
    {context?(<div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
    <div style={{display:"flex", alignItems: "center"}}>
    <img style={{width:"200px", height:"200px"}} src={potionImg} alt=""/>
        <img src={diceArray[context.globalState.poison.dice-1]} alt=""/>
        <img src={diceArray[context.globalState.potion.dice-1]} alt=""/> 
        <img style={{width:"200px", height:"200px"}} src={poisonImg} alt=""/>


    </div>
    <div  style={{display:"flex", alignItems: "center"}}>
    <p style={{ width:"600px", height:"150px", textAlign: "center", border: "1px solid #000", margin:"auto" }} >Name: {context.globalState.poison.name}<br></br>Alias: {context.globalState.poison.alias}<br></br>Curative: false<br></br>Power: {context.globalState.poison.power}<br></br>Mana: {context.globalState.poison.mana}<br></br></p>
    <p style={{ width:"600px", height:"150px",textAlign: "center", border: "1px solid #000" }} >Name: {context.globalState.potion.name}<br></br>Alias: {context.globalState.potion.alias}<br></br>Curative: true<br></br>Power: {context.globalState.potion.power}<br></br>Mana: {context.globalState.potion.mana}<br></br></p>
    </div>
    <button   style={{
    fontSize:75,
    textAlign:"center",

}} onClick={() => {context.handleGlobalState({page: "final"}) }}>LAUNCH BATTLE</button>
</div>):null}


  </>
  );


}

export default BattlePage;


