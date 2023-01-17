import React from "react";
import axios from "axios"
import diceArray from "../images.js"
import potionImg from "../assets/potion.png"
import poisonImg from "../assets/poison.png"
import AppContext from '../context';




const FinalPage = () => {


  const context = React.useContext(AppContext);

console.log("THEWINNERPOTION")
console.log(context.globalState.winnerPotion)
  return (
    <>
    {context?(<div  style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
        <div className="center">
        <img src={diceArray[context.globalState.winnerPotion.dice-1]} alt=""/>
        {context.globalState.winnerPotion.curative? (<img style={{width:"200px", height:"200px"}} src={poisonImg} alt=""/>):(<img style={{width:"200px", height:"200px"}} src={potionImg} alt=""/>)}

        </div>
        <div className="center" style={{display:"flex", flexDirection:"column", alignItems: "center"}} >
        <p style={{ width:"600px", height:"100px",textAlign: "center", border: "1px solid #000" }} >{context.globalState.winnerPotion.name}<br></br>Resultado de la pocion ganadora = {context.globalState.winnerPotion.dice}X{(context.globalState.winnerPotion.dice)/10}X{context.globalState.winnerPotion.power}/{context.globalState.winnerPotion.mana} = {context.globalState.winnerPotion.value}</p>
        <p style={{ width:"600px", height:"100px",textAlign: "center", border: "1px solid #000" }} >{context.globalState.loserPotion.name}<br></br>Resultado de la pocion perdedora = {context.globalState.loserPotion.dice}X{(context.globalState.loserPotion.dice)/10}X{context.globalState.loserPotion.power}/{context.globalState.loserPotion.mana} = {context.globalState.loserPotion.value}</p>
        </div>
        <button   style={{
        fontSize:75,
        textAlign:"center",

    }} 
    onClick={() => {context.handleGlobalState({page: "battle"});context.setRandomPotions(50,50)}} >PLAY AGAIN</button>
    </div>):null}


  </>
  );


}

export default FinalPage;


