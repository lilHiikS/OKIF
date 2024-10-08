import { Link, useMatch, useResolvedPath } from 'react-router-dom'; // Assuming you are using React Router for navigation
import './styles/Navbar.css'; // Assuming you have a CSS file for styling
import logo from './images/logo.jpg'; // Import the logo image

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/forside">Forside</Link>
                <Link to="/sponsor">Sponsor</Link>
                <Link to="/galleri">Galleri</Link>
                <Link to="/handbold">Håndbold</Link>
                <Link to="/fodbold">Fodbold</Link>
                <Link to="/badminton">Badminton</Link>
                <Link to="/tennis-padel">Tennis/Padel</Link>
                <Link to="/gymnastik">Gymnastik</Link>
                <Link to="/wt">WT</Link>
                <Link to="/multibanen">Multibanen</Link>
                <Link to="/klubben">Klubben</Link>
            </div>
        </nav>
    );
};

function CustomLink({href, children, ...props}){
    const resolvedPath = useResolvedPath(href);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>    
            <Link to={href} {...props}>
                {children}
            </Link>
        </li>
    );

}

export default Navbar;