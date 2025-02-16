import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
<header className="header">
    <a href="/" className="logo">MoneyNext</a>
        <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Tracking</a>
        <a href="/">Reccomendations</a>


        </nav>
    
</header>  )
}

export default Navbar