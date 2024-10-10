import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './navbar.css';
import logo from './logo.jpg';


export default function Navbar() {
    return (
        <nav className="navbar">
            <CustomLink to="/">
                <img src={logo} className="logo" alt="logo" />
            </CustomLink>
            <ul className="nav-links">
                <CustomLink to="/Sponsor">Sponsor</CustomLink>
                <CustomLink to="/Galleri">Galleri</CustomLink>
                <CustomLink to="/Handbold">Håndbold</CustomLink>
                <CustomLink to="/Fodbold">Fodbold</CustomLink>
                <CustomLink to="/Badminton">Badminton</CustomLink>
                <CustomLink to="/Padel">Padel</CustomLink>
                <CustomLink to="/Gymnastik">Gymnastik</CustomLink>
                <CustomLink to="/Wt">WT</CustomLink>
                <CustomLink to="/Multibanen">Multibanen</CustomLink>
                <CustomLink to="/Klubben">Klubben</CustomLink>
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