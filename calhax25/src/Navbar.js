import { Link } from "react-router-dom";
export default function Navbar() {
    return (   
    <nav className="nav">
        <a  href="/" className="site-title">
        Independent Students
        </a>
    <ul>
        <li className="active">
            <Link to="/home">Home</Link> {/* React Router link */}    
        </li>
            <li className="active">        
            <Link to="/about">About Us</Link> {/* React Router link */}
        </li>
            <li className="active">
            <Link to="/data">Data</Link> {/* React Router link */}
        </li>
    </ul>
</nav>
) 
     
}