import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ activeTab }) => {
    return (
        <div className="navbar">
            <ul className="navbar-links">
                <li>
                    <NavLink
                        to="/"
                        className={activeTab === '/' ? 'active' : ''}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/add"
                        className={activeTab === '/add' ? 'active' : ''}
                    >
                        Add Item
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/update"
                        className={activeTab === '/update' ? 'active' : ''}
                    >
                        Update Item
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/remove"
                        className={activeTab === '/remove' ? 'active' : ''}
                    >
                        Remove Item
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/display-category"
                        className={activeTab === '/display-category' ? 'active' : ''}
                    >
                        Display Category
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/search"
                        className={activeTab === '/search' ? 'active' : ''}
                    >
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sort"
                        className={activeTab === '/sort' ? 'active' : ''}
                    >
                        Sort
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/low-stock"
                        className={activeTab === '/low-stock' ? 'active' : ''}
                    >
                        Low Stock
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;