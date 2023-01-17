import React from "react";
import axios from "axios"
import diceArray from "./images.js"
import potionImg from "./assets/potion.png"
import poisonImg from "./assets/poison.png"
import AppContext from './context';
import HomePage from "./components/HomePage.js";
import BattlePage from "./components/BattlePage.js";
import FinalPage from "./components/FinalPage.js";


let arrayPotion = []
let arrayPoison = []
let potion
let poison
let winnerPotion
let loserPotion
const App = () => {

  const [globalState, setGlobalState] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [page, setPage] = React.useState("home");
  
  React.useEffect(() => {
    
    axios
      .get("https://gist.githubusercontent.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53/raw/25dc0198b2aaa85f0b5583978a0c6772cab63aba/Potions.js", {
        responseType: "json",
      })
      .then((response) => {

         setData(response.data)
         handleGlobalState({page: "home"})

      });
  
  }, []);

  const handleGlobalState = data => {
    setGlobalState(globalState => ({
      ...globalState,
      ...data,
    }));
   
  };


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
    handleGlobalState({poison})
    handleGlobalState({potion})

    winner(poison,potion)
  }

  function winner(poison,potion){
    let poisonValue = ((potion.dice)*((potion.dice)/10)*poison.power)/poison.mana
    poison.value=poisonValue
    let potionValue = ((potion.dice)*((potion.dice)/10)*potion.power)/potion.mana
    potion.value=potionValue
   if(poisonValue>potionValue){
    winnerPotion = poison
    loserPotion = potion
    handleGlobalState({winnerPotion})
    handleGlobalState({loserPotion})
   }
   else{
    winnerPotion = potion
    loserPotion = poison
    handleGlobalState({winnerPotion})
    handleGlobalState({loserPotion})
   }
  }



  return (
    <AppContext.Provider value={{globalState,handleGlobalState,setRandomPotions}}>
  <>
{data ? (globalState.page=="home" ?(    <HomePage></HomePage>):
  ( globalState.page==="battle"?( <BattlePage></BattlePage>):(<FinalPage></FinalPage>))):(null)}
  </>
  </AppContext.Provider>
  );


}

export default App;


