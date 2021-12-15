import React from 'react';

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
                    <a className="navbar-brand">Rafael's Stuffed Animals</a>
                    <a><i onClick={ () => openNavigation()} className="fas fa-bars nav-icon__bars"/></a>
                    <a className={`nav-icon__cross`}><i onClick={() => closeNavigation()} className="fas fa-times "/></a>
                </div>
                
                
                <ul className="navbar nav text-center nav__list">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/item/create">Create new</a>
                    </li>
                </ul>
            </div>
            <ul className="navbar nav text-center pb-4 nav__list">
                <li className="nav-item">
                    <a className="nav-link" href="/sign-up">Sign up</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-btn" href="/login">Log in</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;


/*<nav className="navbar navbar-dark bg-dark">
 <div className="mx-auto navbar-flex-item ">
 <a className="navbar-brand">Rafael's Stuffed Animals</a>
 
 <ul className="navbar nav nav__box">
 <li className="nav-item active">
 <a className="nav-link" href="/">Home</a>
 </li>
 <li className="nav-item">
 <a className="nav-link" href="/category">Categories</a>
 </li>
 <li className="nav-item">
 <a className="nav-link" href="/item/create">Create new</a>
 </li>
 </ul>
 </div>
 <ul className="navbar nav mx-auto text-center nav__box">
 <li className="nav-item">
 <a className="nav-link" href="/sign-up">Sign up</a>
 </li>
 <li className="nav-item active">
 <a className="nav-btn" href="/login">Log in</a>
 </li>
 </ul>
 </nav>*/
