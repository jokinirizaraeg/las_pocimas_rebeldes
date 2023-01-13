import React from "react";
function App() {


  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    
    axios
      .get("https://gist.github.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53", {
        headers: {"Access-Control-Allow-Origin": "*"},
        responseType: "json",
      })
      .then((response) => {
        setPost(response);
      });

  }, []);

  React.useEffect(() => {
    console.log("POTIONS")
    console.log(post)
  }, [post]);


  return (
    <div className="App">
      <h1>test</h1>
      <button onClick={window.location.href="pagelink"
} >ENTER</button>
    </div>
  );
}




export default App;
