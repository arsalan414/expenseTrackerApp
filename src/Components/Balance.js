import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const {transection} = useContext(GlobalContext);
  console.log("checking transection: ",transection)
  let income = 0;
  let expense = 0;
  for(let i=0; i < transection.length; i++){
      if (transection[i].amount > 0){
          income += transection[i].amount;
      } 
      else{
          expense += transection[i].amount;
      } 
  }
  const total = income+expense;
  
  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
    </>
  )
}
