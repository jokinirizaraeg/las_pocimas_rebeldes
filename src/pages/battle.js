import React from "react";
import {Link} from "react-router-dom";
import "../css.css"


const Battle = () => {
  return (
    <div>
        <div className="center">
        <img src={"https://picsum.photos/200/300"} alt="BigCo Inc. logo"/>
        <img src={"https://picsum.photos/200/300"} alt="BigCo Inc. logo"/>
        <img src={"https://picsum.photos/200/300"} alt="BigCo Inc. logo"/>
        <img src={"https://picsum.photos/200/300"} alt="BigCo Inc. logo"/>


        </div>
        <div className="center" style={{display:"flex", alignItems: "center"}}>
        <p style={{ textAlign: "center", border: "1px solid #000" }} >TEXTO DE PRUEBA</p>
        <p style={{ textAlign: "center", border: "1px solid #000" }} > TEXTO DE PRUEBA 2</p>
        </div>
        <Link   style={{
        fontSize:75,
        textAlign:"center",

    }} className="button" to="/final" >LAUNCH BATTLE</Link>
    </div>
  );
};
export default Battle;