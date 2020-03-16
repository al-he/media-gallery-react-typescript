import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/photo/" className="nav-link">
                                Photo
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/illustration/" className="nav-link">
                                Illustration
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/vectors/" className="nav-link">
                                Vectors
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/video/" className="nav-link">
                                Video
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
