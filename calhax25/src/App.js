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

function Home() {
  return( 
    <div className="Title">
      <h2>Home Page</h2>
      <div className="SubTitle">
        <p>Hello</p>
      </div>
    </div>
  )
}

function About() {
  return <h2>About Us Page</h2>;
}

function Data() {
  // State to store the user inputs
  const [inputNumber, setInputNumber] = useState("");
  const [inputLoan, setInputLoan] = useState("");
  const [inputLength, setInputLength] = useState("");
  const [inputRate, setInputRate] = useState("");
  
  // State to store the results
  const [result, setResult] = useState(null);
  const [nonEssentials, setNonEssentials] = useState(null);
  const [savings, setSavings] = useState(null);
  const [amount, setAmount] = useState(null);

  // Handle input change for each field
  const handleInputNumberChange = (event) => {
    setInputNumber(event.target.value);
  };

  const handleInputLoanChange = (event) => {
    setInputLoan(event.target.value);
  };

  const handleInputLengthChange = (event) => {
    setInputLength(event.target.value);
  };

  const handleInputRateChange = (event) => {
    setInputRate(event.target.value);
  };

  // Handle form submission to calculate the results
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Calculations
    const dividedResult = parseFloat(inputNumber) / 2;
    const non = parseFloat(inputNumber) / 10 * 3;
    const savings = parseFloat(inputNumber) / 10 * 2;
    const top = (parseFloat(inputLoan) * parseFloat(inputRate) * ((1 + parseFloat(inputRate)) ** (inputLength * 12))) / ((1 + parseFloat(inputRate)) ** (inputLength*12) - 1);
    
    // Set the results
    setResult(dividedResult);
    setNonEssentials(non);
    setSavings(savings);
    setAmount(top);
  };

  return (
    <div>
      <h2>Calculate your budget</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Put in your income: 
            <input
              type="number"
              value={inputNumber}
              onChange={handleInputNumberChange}
              style={{ display: 'block', marginBottom: '10px' }}
            />
          </label>
        </div>
        
        <div>
          <label>
            Put in your loan amount: 
            <input
              type="number"
              value={inputLoan}
              onChange={handleInputLoanChange}
              style={{ display: 'block', marginBottom: '10px' }}
            />
          </label>
        </div>

        <div>
          <label>
            Loan length (years): 
            <input
              type="number"
              value={inputLength}
              onChange={handleInputLengthChange}
              style={{ display: 'block', marginBottom: '10px' }}
            />
          </label>
        </div>

        <div>
          <label>
            Interest rate (monthly): 
            <input
              type="number"
              step="0.01"
              value={inputRate}
              onChange={handleInputRateChange}
              style={{ display: 'block', marginBottom: '10px' }}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {result !== null && (
        <div>
          <h3>How much you should spend on necessities: {result}</h3>
          <p>This includes rent, groceries, transportation.</p>
          <h3>How much you should spend on non-essentials: {nonEssentials}</h3>
          <p>This includes clothing and memberships.</p>
          <h3>How much you should put into savings: {savings}</h3>
          <p>This includes emergency savings, retirement funds, etc.</p>
          <h3>Loan Payment (monthly): {Math.round(amount)}</h3>
        </div>
      )}
    </div>
  );
}

  

export default App;
