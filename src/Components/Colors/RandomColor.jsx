import { useState } from "react";
import GetRandomInt from "../UtilityFun/GetRandomInt";
const RandomColor=()=>{
    const [randomColor,setRandomColor]=useState('#ccc');
    function alpha(){
        let c= Math.floor(Math.random()*1000);
        c.toFixed(3);
        console.log(c);
        return c;
     
    }
    function randomColorGen(){
        const r=GetRandomInt(0,255);
        const g=GetRandomInt(0,255);
        const b=GetRandomInt(0,255);
       const a=alpha();
        setRandomColor(`rgba(${r},${g},${b},.${a})`)
        console.log(`rgba(${r},${g},${b},.${a})`);
    }
 return <div>
    <div  style={{ backgroundColor: randomColor }} className="randomcolor"></div>
    <button onClick={randomColorGen}>randomColor</button>
 </div>
}
export default RandomColor;