import React from 'react';
import { NavLink } from "react-router-dom";

const Section = ({ data}) => {
    return (
        <nav className="heading-nav">
            <ul>
                {
                    data.map((item ,index) => (
                        <NavLink to={item.path} key={index} className="nav-link" activeClassName="active">
                            {item.title}
                        </NavLink>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Section;