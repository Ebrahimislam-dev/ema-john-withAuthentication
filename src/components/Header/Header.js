import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                {
                    user.email && <span className="text-white-50">{user.displayName}</span>
                }
                {
                    user.email ?

                        <NavLink onClick={logOut} to="/login">Log Out</NavLink>
                        :

                        <NavLink to="/login">Log in</NavLink>
                }

            </nav>
        </div>
    );
};

export default Header;