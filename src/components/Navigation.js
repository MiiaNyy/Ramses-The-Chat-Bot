import React from 'react';
import navLogo from "../assets/rsa-logo.png";

function openNavigation() {
    document.querySelectorAll('.nav__list').forEach(item => {
        item.classList.toggle('visible');
    })
    document.querySelector('.nav-icon__bars').style.display = 'none';
    document.querySelector('.nav-icon__cross').style.display = 'block';
}

function closeNavigation() {
    document.querySelectorAll('.nav__list').forEach(item => {
        item.classList.toggle('visible');
    })
    document.querySelector('.nav-icon__bars').style.display = 'block';
    document.querySelector('.nav-icon__cross').style.display = 'none';
}

function Navigation () {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar">
                <div className={`d-flex justify-content-between align-items-center`}>
                    <div style={{gap: "1em"}} className={`d-flex justify-content-between align-items-center`}>
                        <img width={30} height={30} src={navLogo} alt="logo"/>
                        <a className="navbar-brand">Rafael's Stuffed Animals</a>
                    </div>
                    
                    <a><i onClick={ () => openNavigation()} className="fas fa-bars nav-icon__bars"/></a>
                    <a className={`nav-icon__cross`}><i onClick={() => closeNavigation()} className="fas fa-times "/></a>
                </div>
                
                
                <ul className="navbar nav text-center nav__list">
                    <li className="nav-item">
                        <a className="nav-link" href="#products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://rafaels-inventory.herokuapp.com/">Inventory</a>
                    </li>
                </ul>
            </div>
            <div className="navbar">
                <ul className="navbar nav__list navbar-auth">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign up</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-btn" href="#">Log in</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default Navigation;


