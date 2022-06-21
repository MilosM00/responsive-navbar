import React from "react";

const Navbar = () =>{

    const [hamburger, setHamburger] = React.useState(true);

    const hamburgerHandle = () =>{
        setHamburger(!hamburger)
    };

    return(

        <div>
            
            <nav className="nav">

                <p className="logo-nav">Company</p>

                <p onClick={hamburgerHandle} className="hamburger">
                    {hamburger === true &&
                        <i className="fa fa-bars"></i>
                    }

                    {hamburger === false &&
                        <i className="fa fa-times"></i>
                    }
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
            
                { hamburger === false &&
                    <div className="show-links">
                        <ul>
                            <li><a href="https://github.com/" target="_blank" rel="noreferrer">Home</a></li>
                            <li><a href="https://github.com/" target="_blank" rel="noreferrer">About</a></li>
                            <li><a href="https://github.com/" target="_blank" rel="noreferrer">Contact</a></li>
                            <li><a href="https://github.com/" target="_blank" rel="noreferrer">Services</a></li>
                            <li><a href="https://github.com/" target="_blank" rel="noreferrer">Testimonials</a></li>
                            <li><a href="https://github.com/" target="_blank" rel="noreferrer">Blog</a></li>
                        </ul>
                    </div>
                }

        </div>

    );
};

export default Navbar;