
import React,{useState} from 'react'
import { Simulate } from 'react-dom/test-utils';
// let a = 10

const UseState2 =()=>{  
    let [coins, setCoins] = useState({gold:0, silver:0})
    let {gold, silver} = coins
    console.log(coins);
    // function increase(){
    //     setCoins(coins+1)
    // }
    // function decrease(){
    //     setCoins(coins-1)
    // }
    // function reset(){
    //     setCoins(0)
    // }
    function updateGold(){
        // setCoins({gold:gold+1, silver})
        setCoins({...coins, gold: gold+1})
    }
    function updateSilver(){
        // setCoins({gold, silver:silver+1})
        setCoins({...coins, silver: silver+1})
    }
return(
    <div>
     <h1>Gold = {gold}, Silver = {silver}</h1>
     <button onClick={updateGold}>Update Gold</button>
     <button onClick={updateSilver}>Update Silver</button>
    {/* <button onClick={()=>setCoins(coins+1)}>Increase</button>
    <button onClick={()=>setCoins(coins-1)}>Decrease</button>
    <button onClick={()=>setCoins(0)}>Reset Coins</button> */}
    </div>    
)}

export default UseState2