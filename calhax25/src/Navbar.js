export default function Navbar() {
    return (   <nav className="nav">
        <a  href="/" className="site-title">
        Site Name
    </a>
    <ul>
        <li className="active">
            <a href="/home">Home</a>    
            </li>
            <li className="active">        
            <a href="/about">About Us</a>
            </li>
            <li className="active">
            <a href="/data">Data</a>
            </li>
    </ul>
</nav>
) 
     
}