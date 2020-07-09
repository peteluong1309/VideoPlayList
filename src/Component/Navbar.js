import React, { Fragment } from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="nav-container">
                <div className="navbar-logo">
                    <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/ee/91/eb/ee91ebc6-f7e6-2fa2-356e-d5930900691b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt="navbar-logo" />
                </div>
                <ul className="navbar-nav">
                    <li className="navbar-item"><a href="#adfad" className="navbar-link">Home</a></li>
                    <li className="navbar-item"><a href="#adfad" className="navbar-link">About</a></li>
                    <li className="navbar-item"><a href="#adfad" className="navbar-link">Skill</a></li>
                    <li className="navbar-item"><a href="#adfad" className="navbar-link">Experience</a></li>
                    <li className="navbar-item"><a href="#adfad" className="navbar-link">Project</a></li>
                    <li className="navbar-item"><a href="#adfad" className="navbar-link">Contact</a></li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default Navbar;