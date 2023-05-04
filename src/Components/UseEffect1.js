
import React,{useState, useEffect} from 'react'
import { Simulate } from 'react-dom/test-utils';
// let a = 10

const UseEffect1 =()=>{  
    let [coins, setCoins] = useState({gold:0, silver:0})
    let {gold, silver} = coins
    console.log(coins);

    // document.title = 'Gold = ${gold}, Silver = ${silver}'//whenever compnent reloads, this will be executed 
    useEffect(()=>{
        console.log("useEffect");
        document.title = 'Gold = ${gold}, Silver = ${silver}'
    console.log("use effect called");
    }, [])
return(
    <div>
     <h1>Gold = {gold}, Silver = {silver}</h1>
     <button onClick={()=> setCoins({...coins, gold: gold+1})}>Update Gold</button>
     <button onClick={() => setCoins({...coins, silver: silver+1})}>Update Silver</button>
   
    </div>    
)}

export default UseEffect1