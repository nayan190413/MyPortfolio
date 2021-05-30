import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#2a4c6b"}}>
                <div className="container">
                    <NavLink className="navbar-brand title" style={{padding:'16px'}} to="/">Nayan's PortFolio</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link hov" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hov" to="/Education">Education</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hov" to="/project">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hov" to="/skill">Skill</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hov" to="/cv">CV</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link hov" to="/contact">Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;