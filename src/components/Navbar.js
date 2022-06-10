import React from "react";

const Navbar = () =>{

    const hamburgerHandle = () =>{
        document.querySelector(`.nav-links`).classList.toggle(`active`);
    };

    return(

        <div>
            
            <nav className="nav">

                <p className="logo-nav">Company</p>

                <p onClick={hamburgerHandle} className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </p>

                <ul className="nav-links">
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Home</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">About</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Contact</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Services</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Testimonials</a></li>
                    <li><a href="https://github.com/" target="_blank" rel="noreferrer">Blog</a></li>
                </ul>
                
            </nav>

        </div>

    );
};

export default Navbar;