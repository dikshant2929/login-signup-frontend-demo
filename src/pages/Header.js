import React from 'react';
import { Link } from "react-router-dom";

const Header = ({ children}) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/login-signup-frontend-demo">React Store</a>
                    <div className="collapse navbar-collapse show" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="btn btn-secondary btn-block" to={"/sign-in"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-secondary btn-block" to={"/sign-up"}>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
}

export default Header;