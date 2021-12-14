import React from 'react';

function Navigation () {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="mx-auto text-center navbar-flex-item">
                <a className="navbar-brand">Rafael's Stuffed Animals</a>
                <ul className="navbar nav">
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
            <ul className="navbar nav mx-auto text-center">
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
