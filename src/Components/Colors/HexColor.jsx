import React, { useState } from "react";

import GetRandomInt from "../UtilityFun/GetRandomInt";
const HexColor = () => {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    function randomHexColor() {
        let color = "#";
        let letters = "0123456789ABCDEF";
       for(let i=0;i<6;i++){
        color += letters[GetRandomInt(0, 15)];
       }
      
        
        setBackgroundColor(color);
    }
    return <div >
        <div style={{backgroundColor:backgroundColor}} className="hexcolor"></div>
        <button onClick={randomHexColor}>HexColor</button>
    </div>
}
export default HexColor;