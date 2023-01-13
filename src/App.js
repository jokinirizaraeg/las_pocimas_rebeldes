import React from "react";
import axios from "axios"
import {
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";
import Home from "./pages/index"
import Battle from "./pages/battle"
import Final from "./pages/final";


export const context = React.createContext();

const App = () => {


  const [globalState, setGlobalState] = React.useState(null);
  
  React.useEffect(() => {
    
    axios
      .get("https://gist.githubusercontent.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53/raw/25dc0198b2aaa85f0b5583978a0c6772cab63aba/Potions.js", {
        responseType: "json",
      })
      .then((response) => {
        setGlobalState(response.data);

      });
  
  }, []);
  

  const handleGlobalState = data => {
    setGlobalState(globalState => ({
      ...globalState,
      ...data,
    }));
   
  };


  React.useEffect(() => {
    if(globalState!=null){
      console.log("globalState")
      console.log(globalState)
    }

  }, [globalState]);


  return (
    <context.Provider value={{globalState, handleGlobalState}}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="battle" element={<Battle />} />
        <Route path="final" element={<Final />} />
      </Routes>
    </Router>
    </context.Provider>
  );


}

export default App;


