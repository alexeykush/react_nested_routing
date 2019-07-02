import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/page1" className="nav-link" activeClassName="active">
                Page1
            </NavLink>
            <NavLink to="/page2" className="nav-link" activeClassName="active">
                Page2
            </NavLink>
        </nav>
    );
};

export default Navbar;