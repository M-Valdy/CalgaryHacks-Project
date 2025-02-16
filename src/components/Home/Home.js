import React from 'react'
import Navbar from "../Navbar/Navbar";
import UserFlow from "./UserFlow"
import "./Home.css"


const Home = () => {
    return (
        <div>
        <Navbar />
        <div style={{display:"flex", flexDirection: "row", alignContent: "center"}}>
        <div style={{marginTop:"30%", marginLeft:"-80%" }}>
        <div className="typewriter">
        <h1 style={{fontFamily:"Rubik", fontSize:"35px", color:"#00308F" }} >Be Financially Free </h1>

        </div>
        <p style={{color: "grey", fontSize:"13px", fontWeight:"bold", marginLeft:"40px"}}>Make Money Work For YoU!</p>

        </div>
        <img src={require("../assets/bg1.png")} style={{height:"25rem", position:"relative", left:"2%", marginTop:"6%"}}/>
        </div>
        </div>
    )
}

export default Home