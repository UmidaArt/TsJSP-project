import React from 'react';
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" className="navBtn">Users</NavLink>
            <NavLink to="/todos" className="navBtn">Todos</NavLink>
        </nav>
    );
};

export default Header;