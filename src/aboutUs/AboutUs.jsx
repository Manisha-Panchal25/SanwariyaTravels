import React from 'react';
import NavBar from '../navBar/navBar';
import './AboutUs.css';
import { motion } from 'framer-motion';
import rajatImg from '../images/rajatImg.png'; // You'll need to add this image
import templeImg from '../images/main2.jpg'; // You'll need to add this image
import { 
  HeartFilled, 
  SafetyCertificateFilled, 
  TeamOutlined,
  CompassOutlined,
  CheckCircleFilled
} from '@ant-design/icons';

function AboutUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <HeartFilled style={{ color: '#F5419B' }} />,
      title: "Devotion",
      description: "We approach each journey with deep respect for spiritual traditions."
    },
    {
      icon: <SafetyCertificateFilled style={{ color: '#F5419B' }} />,
      title: "Safety",
      description: "Your security and comfort are our top priorities throughout the journey."
    },
    {
      icon: <TeamOutlined style={{ color: '#F5419B' }} />,
      title: "Community",
      description: "We create a warm, family-like atmosphere for all our travelers."
    },
    {
      icon: <CompassOutlined style={{ color: '#F5419B' }} />,
      title: "Guidance",
      description: "Expert guidance to make your spiritual journey meaningful and enriching."
    }
  ];

  const achievements = [
    "1000+ Happy Travelers",
    "100+ Successful Tours",
    "4.9/5 Average Rating",
    "95% Return Customers"
  ];

  return (
    <>
      <NavBar />
      <div className="about-container">
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Journey of Faith</h1>
          <p className="subtitle">Connecting Souls to Sacred Destinations</p>
        </motion.div>

        <motion.section 
          className="story-section"
          {...fadeIn}
        >
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Welcome to Sanwariya Travels, where every journey is a spiritual awakening. 
                Founded by Mr. Rajat Bansal, our story began with a profound vision to make sacred 
                pilgrimages accessible, comfortable, and deeply meaningful for all devotees.
              </p>
              <p>
                With over a decade of experience in organizing spiritual journeys, we've grown 
                from a small local travel service to becoming one of the most trusted names in 
                religious tourism in the Chandigarh region.
              </p>
              <p>
                Our expertise spans across organizing trips to sacred destinations like Ayodhya, 
                Kashi, Vrindavan, and the Char Dham, ensuring that each pilgrim's journey is 
                not just a trip, but a transformative spiritual experience.
              </p>
            </div>
            <div className="founder-image">
              <img src={rajatImg} alt="Mr. Rajat - Founder" />
              <div className="founder-info">
                <h3>Mr. Rajat Bansal</h3>
                <p>Founder & Managing Director</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="mission-section"
          {...fadeIn}
        >
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To facilitate transformative spiritual journeys that connect people with divine 
              destinations, ensuring comfort, safety, and authentic experiences while maintaining 
              the highest standards of service and devotion.
            </p>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="achievements-section"
          {...fadeIn}
        >
          <div className="achievements-content">
            <h2>Our Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="achievement-card"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircleFilled style={{ color: '#F5419B', fontSize: '24px' }} />
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="commitment-section"
          {...fadeIn}
        >
          <div className="commitment-content">
            <h2>Our Commitment</h2>
            <div className="commitment-grid">
              <div className="commitment-text">
                <p>
                  At Sanwariya Travels, we're committed to:
                </p>
                <ul>
                  <li>Ensuring comfortable and safe journeys</li>
                  <li>Providing knowledgeable spiritual guidance</li>
                  <li>Maintaining transparent communication</li>
                  <li>Creating memorable spiritual experiences</li>
                  <li>Building lasting relationships with our pilgrims</li>
                </ul>
              </div>
              <div className="commitment-image">
                <img src={templeImg} alt="Sacred Temple" />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}

export default AboutUs; 