import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

export default function Transaction() {
  const {addTransection} = useContext(GlobalContext)

  let [text, setText] = useState("");
  let [amount, setAmount] = useState();
  console.log(text, amount)

  const onSubmit = e =>{
    e.preventDefault();

    const newTransection = {
      id: Math.floor(Math.random() *100000000),
      text,
      amount: Number(amount)
    }

    addTransection(newTransection);
  }
  

  return (
    <>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
          <div className="form-control">
            <label for="text">Text</label>
            <input type="text" id="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..."/>
          </div>
          <div class="form-control">
            <label for="amount">Amount <br />
              (negative - expense, positive - income)</label>
            <input type="number" id="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
