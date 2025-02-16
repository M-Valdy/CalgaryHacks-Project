import React from 'react'
import {useState} from "react"
import {useContext} from "react"

// import "./Reccomendations.css"
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState';

function Reccomendations() {

    const [count,setCount]=useState(0)
    const [answer,setAnswer]=useState("")
    const [inc,setInc]=useState("")
    const [exp,setExp]=useState("")


    async function generateAnswer(){
        console.log("loading")
       const response = await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAeMV2BdioFWJcaFdHuyXV9rJbNEcOGZks",
            method: "post",
            data:{
                "contents": [{
                  "parts":[{"text": "Make a Budget for College Student"}]
                  }]
                 }
        })

   setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])


    }
  return (
    <>
         <div>Find Your Reccomendations here </div>
         <button onClick={generateAnswer}>Generate Answer</button> 
         <p>{answer}</p>
        

    </>
   

  )
}

export default Reccomendations