import React from 'react';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import './ContactUs.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaunchIcon from '@mui/icons-material/Launch';

function ContactUs() {
    const handleMapClick = () => {
        window.open('https://www.google.com/maps/place/Sanwariya+Travels+%7C+Tourist+Bus+Service+in+Chandigarh+%7C+Travel+Agency+in+Chandigarh,+Panchkula,Baltana,+Zirakpur+%26+Mohali/@30.6694715,76.8303912,17z/data=!3m1!4b1!4m6!3m5!1s0x390f953cf3fd1765:0x32d9e923d49e97ca!8m2!3d30.6694715!4d76.8303912!16s%2Fg%2F11vplw2dxr?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D', '_blank');
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/+918901755193', '_blank');
    };

    return (
        <>
            <NavBar />
            <div className="contact-container">
                <h1>Get in Touch</h1>
                <p className="contact-intro">
                    Ready to plan your next adventure? We're here to help make your travel dreams a reality. 
                    Reach out to us through any of these channels, and we'll get back to you promptly.
                </p>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <div className="info-item">
                            <PhoneIcon className="icon" />
                            <div>
                                <h3>Phone</h3>
                                <p>
                                    <a href="tel:+918901755193">+91 89017 55193</a>
                                </p>
                            </div>
                        </div>
                        <div className="info-item">
                            <EmailIcon className="icon" />
                            <div>
                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:sanwariyatravel1999@gmail.com">
                                        sanwariyatravel1999@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="info-item">
                            <WhatsAppIcon className="icon whatsapp" />
                            <div>
                                <h3>WhatsApp</h3>
                                <p>
                                    <a href="#" className="clickable" onClick={handleWhatsAppClick}>
                                        +91 89017 55193
                                    </a><br></br>
                                    <a href="https://wa.me/+919996344395" target="_blank" rel="noopener noreferrer" className='clickable'>+91 99963 44395</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="location-info">
                        <h2>Visit Us</h2>
                        <div className="info-item">
                            <LocationOnIcon className="icon" />
                            <div>
                                <h3>Office Address</h3>
                                <p>Sanwariya Travels</p>
                                <p>Shop no 16, Main market, Jain Faishners Road,</p>
                                <p>Baltana, Panchkula, Punjab 140604</p>
                                <button className="map-button" onClick={handleMapClick}>
                                    View on Google Maps <LaunchIcon style={{ fontSize: '1rem' }} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="social-media">
                        <h2>Connect With Us</h2>
                        <div className="social-icons">
                            <a 
                                href="https://www.facebook.com/share/1DKfTgKALn/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-link"
                            >
                                <div className="social-icon-wrapper facebook">
                                    <FacebookIcon className="social-icon" />
                                </div>
                                <span>Follow us on Facebook</span>
                            </a>
                            <a 
                                href="https://www.instagram.com/sanwariya_travel1999?igsh=OXJhMjM3MDcwbjY1" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-link"
                            >
                                <div className="social-icon-wrapper instagram">
                                    <InstagramIcon className="social-icon" />
                                </div>
                                <span>Follow us on Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="business-hours">
                    <h2>Business Hours</h2>
                    <div className="hours-grid">
                        <div className="hours-item">
                            <span>
                                <AccessTimeIcon style={{ marginRight: '8px', verticalAlign: 'middle', color: 'rgb(245, 65, 155)' }} />
                                Monday - Saturday
                            </span>
                            <span>9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="hours-item">
                            <span>
                                <AccessTimeIcon style={{ marginRight: '8px', verticalAlign: 'middle', color: 'rgb(245, 65, 155)' }} />
                                Sunday
                            </span>
                            <span>10:00 AM - 8:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default ContactUs; 