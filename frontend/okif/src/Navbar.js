import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src="./images/logo.jpg" className="logo" />
            </Link>
            <ul className="nav-links">
                <Link to="/Sponsor">Sponsor</Link>
                <Link to="/Galleri">Galleri</Link>
                <Link to="/Handbold">Håndbold</Link>
                <Link to="/Fodbold">Fodbold</Link>
                <Link to="/Badminton">Badminton</Link>
                <Link to="/Padel">Padel</Link>
                <Link to="/Gymnastik">Gymnastik</Link>
                <Link to="/Wt">WT</Link>
                <Link to="/Multibanen">Multibanen</Link>
                <Link to="/Klubben">Klubben</Link>
            </ul>
        </nav>    
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )


}