import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-white shadow-sm fixed-top">
            <header className="d-flex flex-wrap justify-content-center py-1 mb-1 container">
                <ul className="nav nav-pills fw-semibold">
                    <li className="nav-item mx-3">
                        <Link to="/home" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default NavBar;