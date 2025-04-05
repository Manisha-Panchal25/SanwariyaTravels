import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'; // Import Link for navigation
import varindava7 from "../images/varindavan7.png";
import varindava4 from "../images/varindava4.jpg";
import varindavan5 from "../images/varindavan5.jpg";
import varindavan6 from "../images/varindavan6.jpg";
import varindavan from "../images/varindavan.webp";
import buslogo from "../images/buslogo.png";
import kumbh from "../images/kumbh4.jpg";
import bus from "../images/bus.png";
import NavBar from "../navBar/navBar";
import "./Home.css";
import { RightCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import galleryImage1 from '../images/img1.png'; // Replace with actual image paths
import galleryImage2 from '../images/img2.jpg';
import galleryImage3 from '../images/img8.jpg';
import galleryImage4 from '../images/img14.jpg';
import sky from '../images/sky.webp';
import sky2 from '../images/sky2.webp';
import mainImg from '../images/mainImg.jpg';
import main2 from '../images/main7.jpg';
import main4 from '../images/main4.jpg';
import main5 from '../images/main5.jpg';
import main6 from '../images/main6.jpg';
import main from '../images/main.jpg';
import main3 from '../images/main3.webp';
import main8 from '../images/main8.jpg';


const images = [
  // main,
  main3,
  mainImg,
  // main2,
  main4,
  main5,
  main6,
  main8
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Clone first image at the end for seamless effect
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentImageIndex === images.length) {
      // Wait for transition to finish, then reset instantly
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentImageIndex(0);

        // Restore transition after resetting position
        setTimeout(() => {
          sliderRef.current.style.transition = "transform 0.8s ease-in-out";
        }, 50);
      }, 800);
    }
  }, [currentImageIndex]);

  const handleViewAllReviews = () => {
    navigate('/reviews');
  };
  const handleFacilities = () =>{
    navigate('/facilities');
  }
  const handleGallery=()=>{
    navigate('/gallery');
  }
  const handleAboutUs=()=>{
    navigate('/aboutUs');
  }
  return (
    <>
      <NavBar />
      <div className="hero-container">
        <div className="background-slideshow">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slide-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="hero-content">
          <div className="text-overlay">With Sanwariya Travels,</div>
          <div className="highlight">Every Journey is a Blessing</div>
          {/* <button className="btn-overlay">Book Your Journey Now</button> */}
        </div>
      </div>
      <div className="about-section-wrapper">
        <div className="about-heading">Sanwariya Travels – Your Trusted Travel Partner</div>
        <div className="about-more">Travel Agency in Chandigarh, Panchkula,Baltana, Zirakpur & Mohali</div>
        <div className="about-summary">Sanwariya Travels is your go-to travel agency in Panchkula, offering top-notch travel solutions tailored to your needs. Whether you're searching for a reliable travel agency in Panchkula or a professional tour agency in Chandigarh, we've got you covered.</div>
        <div className="about-summary">Our tourist bus service in Chandigarh ensures a comfortable and hassle-free journey for all group trips. As leading Chandigarh tour operators, we specialize in crafting unforgettable travel experiences.</div>
        <div className="about-summary">Looking for the best travel agency in Zirakpur or dependable tour and travels in Baltana? Sanwariya Travels is here to assist you with personalized and budget-friendly travel services.</div>
        <div className="about-summary">Book with Sanwariya Travels, the best travel agency in Chandigarh, and enjoy seamless travel planning. Visit our travel agency in Chandigarh today for exclusive deals!</div>
        <button className="view-all-reviews-btn" onClick={handleAboutUs}>Read More
        <ArrowForwardIcon className="arrow-icon" />
        </button>
      </div>

{/* gallery section */}

<div className="gallery-overview-section">
        <h2 className="heading-border">Explore Our Gallery</h2>
        <p className="about-summary">
          Discover the beauty of our travel experiences through stunning visuals. 
          Our gallery showcases breathtaking destinations, memorable moments, and the joy of travel.
        </p>
        <div className="gallery-images">
          <img src={galleryImage1} alt="Gallery Image 1" className="gallery-image" />
          <img src={galleryImage2} alt="Gallery Image 2" className="gallery-image" />
          <img src={galleryImage3} alt="Gallery Image 3" className="gallery-image" />
          <img src={galleryImage4} alt="Gallery Image 4" className="gallery-image" />
        </div>
        <button className="view-all-reviews-btn" onClick={handleGallery}>
        View Gallery
        <ArrowForwardIcon className="arrow-icon" />
      </button>
        {/* <Link to="/gallery" className="view-gallery-btn">View Gallery</Link> */}
      </div>


{/* facilities section */}
<div className="reviews-overview-section">
      <div className="reviews-overview-header">
        <h2 className="heading-border">Explore Our Facilities</h2>
        <p className="about-summary">
          Discover a wide range of travel facilities designed to make your journey unforgettable.
          From breathtaking destinations like Ayodhya and Kashi to thrilling adventure tours,
          we offer something for every traveler.
        </p>
      </div>

      <div className="reviews-overview-grid">
        {/* Destinations Overview */}
        <div className="overview-review-card">
          <h3 className="reviewer-name">Destinations</h3>
          <p className="review-text">
            Visit iconic places such as <span className="highlight3">Vrindavan, Naimisharanya, and the 4 Dham Yatra</span>.
            Each destination offers unique experiences and cultural insights.
          </p>
        </div>

        {/* Facilities Provided Overview */}
        <div className="overview-review-card">
          <h3 className="reviewer-name">Facilities Provided</h3>
          <p className="review-text">
            Enjoy our diverse facilities including <span className="highlight3">adventure tours, bus tours, city tours</span>,
            and personalized private tours tailored to your interests.
          </p>
        </div>

        {/* Trip Services Overview */}
        <div className="overview-review-card">
          <h3 className="reviewer-name">Trip Services</h3>
          <p className="review-text">
            We provide essential trip services such as comfortable hotel accommodations,
            <span className="highlight3">delicious meals</span>, and knowledgeable <span className="highlight3">local guides</span> to enhance your travel experience.
          </p>
        </div>
      </div>
      <p style={{ textAlign: 'center', margin: '20px 0', color: '#444' }}>
    <Link to="/contactUs" className="highlight2">Contact us</Link> today to plan your next adventure and explore even more options!
  </p>
      {/* <p style={{ textAlign: 'center', margin: '20px 0' ,color: '#444'}}>
        Contact us today to plan your next adventure and explore even more options!
      </p> */}

      <button className="view-all-reviews-btn" onClick={handleFacilities}>
        View All Facilities
        <ArrowForwardIcon className="arrow-icon" />
      </button>
    </div>



      <div className="top-destination-div">
        <img src={kumbh} alt="Picture" className="top-destination-back-pic"/>
        <div className="popular">Popular Destinations</div>
        <ul className="destinations">
          <marquee direction="left" behaviour="scroll">
          <li className="destinations-item"><span><img src={buslogo} alt="travel bus logo" className="buslogo"/></span><span className="place-div"> Ayodhya <span>"Journey to the birthplace of Lord Rama and immerse <br/>yourself in divine serenity!"</span> </span></li>
          <li className="destinations-item"><span><img src={buslogo} alt="travel bus logo" className="buslogo"/></span><span className="place-div"> Vrindavan <span>"Walk the sacred streets where Lord Krishna once played,<br/> and feel the devotion in the air!"</span> </span> </li>
          <li className="destinations-item"><span><img src={buslogo} alt="travel bus logo" className="buslogo"/></span><span className="place-div"> Kashi (Varanasi) <span>"Experience the spiritual heartbeat of India with mesmerizing<br/>Ganga Aarti and timeless temples!"</span> </span></li>
          <li className="destinations-item"><span><img src={buslogo} alt="travel bus logo" className="buslogo"/></span><span className="place-div"> Prayagraj <span>"Witness the grandeur of the Triveni Sangam, where three<br/>sacred rivers meet in eternal harmony!"</span> </span></li>
          <li className="destinations-item"><span><img src={buslogo} alt="travel bus logo" className="buslogo"/></span><span className="place-div"> Khatu Shyam <span>"Visit the holy shrine of Khatu Shyam Ji and seek divine<br/> blessings with ease and comfort!"</span></span></li>
          <li className="destinations-item"><span><img src={buslogo} alt="travel bus logo" className="buslogo"/></span><span className="place-div"> Char Dham Yatra <span>"Embark on a life-changing pilgrimage to the four <br/>sacred abodes of divinity!"</span></span></li>
          <li className="destinations-item"><span><img src={buslogo} alt="travel bus logo" className="buslogo"/></span><span className="place-div"> Mata Vaishno Devi <span>"Chalo bulava aaya hai—feel the divine call of Mata <br/>Rani on this sacred trek!"</span></span></li>
         
          </marquee>
        </ul>
        <div>
        <img src={bus} className="bus-img"/>
      </div>
      </div>
      
      
      {/* Reviews Overview Section */}
      <div className="reviews-overview-section">
        <div className="reviews-overview-header">
          <h2 className="heading-border">What Our Customers Say</h2>
          <div className="rating-summary">
            <div className="rating-stars">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} className="overview-star" />
              ))}
            </div>
            <span className="rating-number">4.9</span>
            <span className="rating-count">(250+ Reviews)</span>
          </div>
        </div>

        <div className="reviews-overview-grid">
          {/* Featured Review 1 */}
          <div className="overview-review-card">
            <div className="reviewer-info">
              <div className="reviewer-avatar">BC</div>
              <div className="reviewer-details">
                <div className="reviewer-name">Babita Chauhan</div>
                <div className="review-stars">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="star-icon-small" />
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">
              "Good service. We enjoyed alot. All arrangements done by Mr. Rajat (the organiser) are very appreciable..."
            </p>
          </div>

          {/* Featured Review 2 */}
          <div className="overview-review-card">
            <div className="reviewer-info">
              <div className="reviewer-avatar">GJ</div>
              <div className="reviewer-details">
                <div className="reviewer-name">Gagan Jangra</div>
                <div className="review-stars">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="star-icon-small" />
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">
              "Awesome trip with rajat...very nice and gentle boy...3 times already with rajat...what is the environment of the bus...vibes of family and friends have come on the trip."
            </p>
          </div>

          {/* Featured Review 3 */}
          <div className="overview-review-card">
            <div className="reviewer-info">
              <div className="reviewer-avatar">VS</div>
              <div className="reviewer-details">
                <div className="reviewer-name">Vikram Singh Toor</div>
                <div className="review-stars">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="star-icon-small" />
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">
              "One of the best travelers. Your tea, breakfast, lunch, dinner and rooms are provided very well or you feel like you are in a family atmosphere.. trust me this is my first trip, it will be so good than I thought."
            </p>
          </div>
        </div>

        <button className="view-all-reviews-btn" onClick={handleViewAllReviews}>
          View All Reviews
          <ArrowForwardIcon className="arrow-icon" />
        </button>
      </div>
    </>
  );
}

export default Home;
