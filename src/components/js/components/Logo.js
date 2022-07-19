import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/shiva-developer.png";

function Logo() {
    return (
        <div className="logo-wrapper">
            <Link to="/">
                <img className="logo" src={logo} alt="Shivakumar Ramamurthy"/>
            </Link>
        </div>
    );
}
  
export default Logo;