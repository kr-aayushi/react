import React from 'react';
/*function Greet(){
    return <h1>Hello.......!!!!!!!!!</h1>
}*/
const Greet=(props1)=>
{
    console.log(props1);
    return(
        <div><h1>{props1.name} {props1.heroname}</h1>
        {props1.children}
        </div>
    )
   
};
export default Greet;
