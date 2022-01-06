import { useState } from "react";
import React from 'react';
function Stateinfc() {
    let [number,setData] = useState(0)
    function Updatedata() 
    {
        setData(number+1)
    }

console.warn("rerendering")
return (
    <div style={{backgroundcolor: "lightblue"}}>
        <h1>Timer clock</h1>
        <h1>{number}</h1>
        <button onClick={Updatedata}>Increase me</button>
    </div>
);
}
export default Stateinfc;