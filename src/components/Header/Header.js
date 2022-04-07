import React from 'react';
import './Header.css'

//React component returns JSX kind on markup
function Header() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <i className="topbar-social-icon fab fa-instagram"></i>
                <i className="topbar-social-icon fab fa-facebook"></i>
                <i className="topbar-social-icon fab fa-linkedin"></i>
                <i className="topbar-social-icon fab fa-twitter"></i>
            </div>
            <div className="topbar-center">
                <ul className="topbar-list">
                    <li className="topbar-list-item">HOME</li>
                    <li className="topbar-list-item">ABOUT</li>
                    <li className="topbar-list-item">ADD DATA</li>
                </ul>
            </div>
            <div className="topbar-right">
                <i className="topbar-search fas fa-search"></i>
            </div>
        </div>
    )
}

export default Header