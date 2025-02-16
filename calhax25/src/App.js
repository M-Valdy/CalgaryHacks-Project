import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"
import React, { useState } from "react";

function App() {
  return (
    <Router>
      <div>
        <h1>Independent Students</h1>  {/* h1 element added */}
        <Navbar />  {/* Navbar component rendered */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
}
function NumberDivide() {
  // State to store the user input
  const [inputNumber, setInputNumber] = useState("");
  // State to store the result
  const [result, setResult] = useState(null);

  // Handle input change
  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  // Handle form submission to calculate the result
  const handleSubmit = (event) => {
    event.preventDefault();
    // Divide the input by 2 and set the result
    const dividedResult = parseFloat(inputNumber) / 2;
    setResult(dividedResult);
  };
  return (
    <div>
      <h2>Divide a Number by 2</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
          <input
            type="number"
            value={inputNumber}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {result !== null && (
        <div>
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
}
function Home() {
  return( 
    <div>
      <h2>Home Page</h2>
      <div>
        <p>Hello</p>
      </div>
    </div>
  )
}

function About() {
  return <h2>About Us Page</h2>;
}

function Data() {
    // State to store the user input
    const [inputNumber, setInputNumber] = useState("");
    // State to store the result
    const [result, setResult] = useState(null);
    const [NonEssentials, setNonEssentials] = useState(null);
    const [Savings, setSavings] = useState(null);
  
    // Handle input change
    const handleInputChange = (event) => {
      setInputNumber(event.target.value);
    };
  
    // Handle form submission to calculate the result
    const handleSubmit = (event) => {
      event.preventDefault();
      // Divide the input by 2 and set the result
      const dividedResult = parseFloat(inputNumber) / 2;
      const non = parseFloat(inputNumber) / 10 * 3
      const savings = parseFloat(inputNumber) / 10 * 2
      setResult(dividedResult)
      setNonEssentials(non);
      setSavings(savings)
    };
  return (
    <div>
      <h2>Calculate your budget</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Put in your income: 
          <input
            type="number"
            value={inputNumber}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {result !== null && (
        <div>
          <h3>How much you should spend on necessities: {result}</h3>
          <p> This includes rent, groceries, transportation. </p>
          <h3>How much you should spend on non-essentials: {NonEssentials}</h3>
          <p> This includes clothing and memberships. </p>
          <h3>How much you should put into savings: {Savings}</h3>
        </div>
      )}
    </div>
  )
}

export default App;