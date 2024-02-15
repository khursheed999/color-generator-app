import React, {useState} from "react";
import GetRandomInt from "../UtilityFun/GetRandomInt";
const RGBColor=()=>{
    const [rgbColor,setRGBColor]=useState('#124555');
   function randomRGBColor(){
    const r=GetRandomInt(0,255);
    const g=GetRandomInt(0,255);
    const b=GetRandomInt(0,255);
    setRGBColor(`rgb(${r},${g},${b})`);
    console.log(rgbColor);

   } 
   return <div  >
    <div  style={{backgroundColor:rgbColor}} className="rgbcolor"></div>
    <button onClick={randomRGBColor}>RGBcolor</button>
   </div>
}
export default RGBColor;