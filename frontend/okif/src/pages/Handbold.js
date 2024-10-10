import React from 'react';
import { Link } from 'react-router-dom';

const Handbold = () => {
    return (
        <>
            <div className="haandbold-menu">
                <ul className="fodbold-links">
                    <Link to="/kampreferat">Kampreferat</Link>
                    <Link to="/traeningstider">Træningstider</Link>
                    <Link to="/indendors">Indendørsfodbold</Link>
                    <Link to="/okopen">ØK OPEN - Fodbold</Link>
                    <Link to="/vff">Fodbold VFF</Link>
                    <Link to="/maalarkiver">Målaktier</Link>
                    <Link to="/sponsorer">Sponsorer</Link>
                </ul>
            </div>
            <div className="haandbold-content">
                
            </div>

        </>
    );
};

export default Handbold;