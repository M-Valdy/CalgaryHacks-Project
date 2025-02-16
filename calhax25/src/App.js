import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"

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
  return (
    <div>
      <h2>Data Page</h2>
      
      <p>
        Test out the 50/30/20 rule
      </p>
      <label>
        Your income: <input name = "My Input"/>
      </label>
    </div>
  )
}

export default App;