import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <h1 className="navbar-brand"> 
                <Link className="home-link" to="/">#VANLIFE</Link>
            </h1>
            <div className="navbar-links">
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/vans">Vans</Link>
            </div>
        </nav>
    );
}