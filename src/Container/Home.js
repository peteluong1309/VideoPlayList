import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Trang chu</h1>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="navbar-item"><Link to="/log-in">Dang nhap</Link></li>
                    <li className="navbar-item"><Link to="/sign-up">Dang ky</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;