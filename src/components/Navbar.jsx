import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ContactsIcon from '@mui/icons-material/Contacts';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navItems = [
        { path: '/', text: 'Home', icon: <HomeIcon /> },
        { path: '/about', text: 'About', icon: <InfoIcon /> },
        { path: '/gallery', text: 'Gallery', icon: <PhotoLibraryIcon /> },
        { path: '/contact', text: 'Contact', icon: <ContactsIcon /> }
    ];

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">Sanwariya Travels</Link>
                </div>
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <MenuIcon />
                </button>
                <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} />
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header">
                        <div className="logo">Sanwariya Travels</div>
                        <button 
                            className="close-menu"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <CloseIcon />
                        </button>
                    </div>
                    <ul className="mobile-nav-items">
                        {navItems.map((item, index) => (
                            <li key={item.path} className="mobile-nav-item">
                                <Link
                                    to={item.path}
                                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                >
                                    {item.icon}
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-menu-footer">
                        <div className="mobile-social-links">
                            <a href="https://facebook.com" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </a>
                            <a href="https://instagram.com" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon />
                            </a>
                            <a href="https://wa.me/1234567890" className="mobile-social-link" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon />
                            </a>
                        </div>
                        <div className="mobile-contact-info">
                            <p>Contact us: +1 234 567 890</p>
                            <p>info@sanwariyatravels.com</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar; 