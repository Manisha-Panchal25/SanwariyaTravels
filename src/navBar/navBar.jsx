import { useState, useEffect } from "react";
import "./navBar.css";
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../images/logo.png";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = document.querySelector('.mobile-menu-container');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (menuOpen && 
                mobileMenu && 
                !mobileMenu.contains(event.target) && 
                !menuToggle.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Gallery', path: '/gallery' },
        { label: 'Facilities', path: '/facilities' },
        { label: 'About Us', path: '/aboutUs' },
        { label: 'Reviews', path: '/reviews' },
        { label: 'Contact Us', path: '/contactUs' }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo" onClick={() => handleNavigation('/')}>
                    <img src={logo} alt="Sanwariya Travels" className="nav-logo" />
                    <span>Sanwariya Travels</span>
                </div>

                <ul className="top-list">
                    {menuItems.map((item, index) => (
                        <li 
                            key={index}
                            className={`top-list-item ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => handleNavigation(item.path)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                <button 
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className={`mobile-menu-container ${menuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <img src={logo} alt="Sanwariya Travels" className="mobile-logo" />
                    <h2>Sanwariya Travels</h2>
                    <button 
                        className="mobile-menu-close"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <CloseOutlined />
                    </button>
                </div>
                <ul className="mobile-menu">
                    {menuItems.map((item, index) => (
                        <li 
                            key={index}
                            className={`mobile-menu-item ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => handleNavigation(item.path)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default NavBar;