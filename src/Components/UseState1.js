import React,{useState} from 'react'
// let a = 10

const UseState1 =()=>{
    // let x = useState(0)
    //This x is an array of two elements 
    console.log("component loaded");
let [coins , setCoins] = useState(200)
// function setCoins(coins){  }
let a = 10;
function changeA(){
    a = a+1;
    console.log(a);
}
function changeCoins(){
    setCoins(coins+1)
}
// a = a+1
return(
    <div>
    <h1> a= {a}, coins ={coins}</h1>
    <button onClick={changeA}>Change A</button>
    <button onClick={changeCoins}>Change Coins</button>
    </div>    
)

}

export default UseState1