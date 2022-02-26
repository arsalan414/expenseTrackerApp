import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export default function History() {
  const {transection, deleteTransection} = useContext(GlobalContext)
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transection.map((transObj) => (
          <li className={transObj.amount>0?"plus":"minus"}>
            {transObj.text} <span>${transObj.amount}</span>
            <button onClick={()=> deleteTransection(transObj.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
