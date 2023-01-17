import React from "react";
import axios from "axios"
import diceArray from "./images.js"
import potionImg from "./assets/potion.png"
import poisonImg from "./assets/poison.png"


export const context = React.createContext();

let arrayPotion = []
let arrayPoison = []
let potion
let poison
const App = () => {

  const [winnerPotion, setWinnerPotion] = React.useState(null);
  const [loserPotion, setLoserPotion] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [page, setPage] = React.useState("home");
  
  React.useEffect(() => {
    
    axios
      .get("https://gist.githubusercontent.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53/raw/25dc0198b2aaa85f0b5583978a0c6772cab63aba/Potions.js", {
        responseType: "json",
      })
      .then((response) => {
        console.log("response")
        console.log(response.data)
         setData(response.data)

      });
  
  }, []);


  React.useEffect(() => {
      if(data){
        data.forEach(element => {
          
          if(element.curative){
            arrayPotion.push(element)
          }
          else{
            arrayPoison.push(element)
          }
        });


        setRandomPotions(arrayPoison.length,arrayPotion.length)
        
      }

  
  }, [data]);

  function getRandom (length){
    let random = Math.floor(Math.random() * ((length-1) - 0 + 1)) + 0
    return random
  }
  function getRandomDice (){
    let random = Math.floor(Math.random() * ((6-1) - 0 + 1)) + 0
    random=random+1
    return random
  }
  function setRandomPotions(lengthPoison, lengthPotion){
    poison = arrayPoison[getRandom(lengthPoison)]
    potion = arrayPotion[getRandom(lengthPotion)]
    potion.dice = getRandomDice()
    poison.dice = getRandomDice()
  }

  function winner(poison,potion){
    let poisonValue = ((potion.dice)*((potion.dice)/10)*poison.power)/poison.mana
    poison.value=poisonValue
    let potionValue = ((potion.dice)*((potion.dice)/10)*potion.power)/potion.mana
    potion.value=potionValue
   if(poisonValue>potionValue){
    setWinnerPotion(poison)
    setLoserPotion(potion)
   }
   else{
    setWinnerPotion(potion)
    setLoserPotion(poison)
   }
  }




  return (
  <>
{data ? (page==="home" ?(    <div>
    <h1 style={{textAlign:"center", marginTop:100}}>LAS PÓCIMAS REBELDES</h1>
    <button  style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      width:1000,
      height:90,
      fontSize:75,
      textAlign:"center",

  }} onClick={() => setPage("battle")} >ENTER</button>
  </div>):
  ( page==="battle"?(    <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
    <div style={{display:"flex", alignItems: "center"}}>
    <img style={{width:"200px", height:"200px"}} src={potionImg} alt=""/>
        <img src={diceArray[poison.dice-1]} alt=""/>
        <img src={diceArray[potion.dice-1]} alt=""/>
        <img style={{width:"200px", height:"200px"}} src={poisonImg} alt=""/>


    </div>
    <div  style={{display:"flex", alignItems: "center"}}>
    <p style={{ width:"600px", height:"150px", textAlign: "center", border: "1px solid #000", margin:"auto" }} >Name: {poison.name}<br></br>Alias: {poison.alias}<br></br>Curative: false<br></br>Power: {poison.power}<br></br>Mana: {poison.mana}<br></br></p>
    <p style={{ width:"600px", height:"150px",textAlign: "center", border: "1px solid #000" }} >Name: {potion.name}<br></br>Alias: {potion.alias}<br></br>Curative: true<br></br>Power: {potion.power}<br></br>Mana: {potion.mana}<br></br></p>
    </div>
    <button   style={{
    fontSize:75,
    textAlign:"center",

}} onClick={() => {setPage("final"); winner(poison,potion)}}>LAUNCH BATTLE</button>
</div>):(    <div  style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
        <div className="center">
        <img src={diceArray[winnerPotion.dice-1]} alt=""/>
        {winnerPotion.curative? (<img style={{width:"200px", height:"200px"}} src={poisonImg} alt=""/>):(<img style={{width:"200px", height:"200px"}} src={potionImg} alt=""/>)}

        </div>
        <div className="center" style={{display:"flex", flexDirection:"column", alignItems: "center"}} >
        <p style={{ width:"600px", height:"100px",textAlign: "center", border: "1px solid #000" }} >{winnerPotion.name}<br></br>Resultado de la pocion ganadora = {winnerPotion.dice}X{(winnerPotion.dice)/10}X{winnerPotion.power}/{winnerPotion.mana} = {winnerPotion.value}</p>
        <p style={{ width:"600px", height:"100px",textAlign: "center", border: "1px solid #000" }} >{loserPotion.name}<br></br>Resultado de la pocion perdedora = {loserPotion.dice}X{(loserPotion.dice)/10}X{loserPotion.power}/{loserPotion.mana} = {loserPotion.value}</p>
        </div>
        <button   style={{
        fontSize:75,
        textAlign:"center",

    }} 
    onClick={() => {setPage("battle"); setRandomPotions(arrayPoison.length,arrayPotion.length)}} >PLAY AGAIN</button>
    </div>))):(null)}




  </>
  );


}

export default App;


