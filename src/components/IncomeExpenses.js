import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {useState} from "react"
import axios from 'axios'

import Button from 'react-bootstrap/Button';
import Modal from "./Modal"


//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}




export const IncomeExpenses = () => {

  const [answer,setAnswer]=useState("")
  const [openModal,setOpenModal]=useState("")

  
 
  
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );
  
  
  async function generateAnswer(){
    console.log("loading")
   const response = await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAeMV2BdioFWJcaFdHuyXV9rJbNEcOGZks",
        method: "post",
        data:{
            "contents": [{
              "parts":[{"text": `Make a Budget for College Student with the income ${income} and expense ${expense} , make this information readable for human without asterisks and in point form, also explain where this money can be invested, give 3 investment oppurtunities `}]
              }]
             }
    })

setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])


}



  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">{moneyFormatter(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">{moneyFormatter(expense)}</p>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <button onClick={() => { setOpenModal(!openModal);generateAnswer()}} className="btn1">Find Your Reccomendations</button>

        <Modal isOpen={openModal} onClose={()=>setOpenModal(false)}>
                <p className="para">{answer}</p>

        </Modal>


        </div>
        
      </div>

  )
}
