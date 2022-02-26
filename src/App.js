import "./App.css";

// coponents
import Expense from "./Components/Expense";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import History from "./Components/History";
import Transaction from "./Components/Transaction";

import {GlobalProvider} from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <h1>Hello world</h1>
      <Expense />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
