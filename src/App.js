import React from 'react';
import  Navbar  from './components/Navbar/Navbar.jsx';
import { Balance } from './components/Balance';
import  {IncomeExpenses}  from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
import Reccomendations from './components/Reccomendations';
import Home from "./components/Home/Home.js";

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <div className="container1">
      <IncomeExpenses />
      </div>
    

      <div className="container">
      {/* <Home/> */}
        <Balance />
        <TransactionList />
        <AddTransaction />


      </div>

    </GlobalProvider>

  );
}

export default App;
