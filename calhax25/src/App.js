import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar"

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to My Website</h1>  {/* h1 element added */}
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
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Us Page</h2>;
}

function Data() {
  return <h2>Data Page</h2>;
}

export default App;