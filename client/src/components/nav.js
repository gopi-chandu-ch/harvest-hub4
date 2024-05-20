import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";

const Nav =() => {
    return(
        <div>
            <nav id="nav">
                <ul>
                    <Link to="/register" className="text-dark" id="Link">Register</Link><br/>
                    <h1 id="h11" className="text-white">Harvest Hub</h1>
                   <Link to="/login" className="text-dark" id="Link">Login</Link><br/>
                   </ul>
            </nav>
            <Link to="/home"/>
        </div>
    )
}
export default Nav;