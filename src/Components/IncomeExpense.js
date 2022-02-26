import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
  const {transection} = useContext(GlobalContext);
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
 

  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${income.toFixed(2)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-${Math.abs(expense).toFixed(2)}</p>
        </div>
    </div>
  )
}
