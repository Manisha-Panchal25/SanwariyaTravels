import React from 'react';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import './Facilities.css';
import ayodhya from '../images/ayodhyaF.jpg';
import kashi from '../images/kashiF.jpeg';
import vrindavan from '../images/varindavaF.jpg';
import naimisharanya from '../images/naimisharanyaF.jpg';
import khatushyam from '../images/khatu-shyam-ji-templeF.png';
import prayagraj from '../images/prayagrajF.jpg';
import chardham from '../images/charDhamF.png';
import vaishnodevi from '../images/vaishnoDeviF.jpg';
import adventure from '../images/img2.jpg';
import busTour from '../images/busTour.jpg';
import cityTour from '../images/cityTour.jpg';
import groupTour from '../images/img19.jpg';
import privateTour from '../images/img14.jpg';
import religiousTour from '../images/img1.png';
import tourPickUp from '../images/img13.jpg';
import manyMore from '../images/manyMore.avif';
import hotel from '../images/hotelImg.jpg';
import meal from '../images/meal.jpg';
import guide from '../images/localGuide.jpg';

function Facilities() {
  const destinations = [
    { name: "Ayodhya", image: ayodhya },
    { name: "Kashi (Varanasi)", image: kashi },
    { name: "Vrindavan", image: vrindavan },
    { name: "Naimisharanya", image: naimisharanya},
    { name: "Khatu Shyam Ji", image: khatushyam },
    { name: "Prayagraj", image: prayagraj },
    { name: "4 Dham Yatra", image: chardham },
    { name: "Shri Mata Vaishno Devi Ji", image: vaishnodevi },
  ];

  const facilities = [
    {
      name: "Adventure Tour",
      description: "Experience thrilling activities like trekking, rafting, and wildlife safaris. Explore nature's wonders with expert guides.",
      image: adventure,
    },
    {
      name: "Bus Tours",
      description: "Comfortable and convenient bus tours to popular destinations. Sit back, relax, and enjoy the scenic views.",
      image: busTour,
    },
    {
      name: "City Tour",
      description: "Discover the heart of vibrant cities with guided tours. Explore historical landmarks, cultural hotspots, and local markets.",
      image: cityTour,
    },
    {
      name: "Group Tour",
      description: "Join fellow travelers on exciting group tours. Make new friends and create shared memories.",
      image: groupTour,
    },
    {
      name: "Private Tour",
      description: "Enjoy personalized and exclusive tours tailored to your interests. Experience destinations at your own pace.",
      image: privateTour,
    },
    {
      name: "Religious Tour",
      description: "Embark on spiritual journeys to sacred sites. Experience peace and tranquility in holy destinations.",
      image: religiousTour,
    },
    {
      name: "Tour Pick Up Services",
      description: "Hassle-free pick-up services from your location. Start your journey with ease and convenience.",
      image: tourPickUp,
    },
    {
        name: "And Many More",
        description: "Explore a variety of additional trips tailored to your interests! Contact us for personalized travel planning and discover unique experiences that await you.",
        image: manyMore,
      }
  ];

  const tripServices = [
    {
      name: "Hotel",
      description: "Stay in comfortable and well-located hotels. Enjoy quality accommodations and excellent service.",
      image: hotel,
    },
    {
      name: "Meal Included",
      description: "Savor delicious meals during your trip. Enjoy local cuisine and international flavors.",
      image: meal,
    },
    {
      name: "Local Guide",
      description: "Explore destinations with knowledgeable local guides. Gain insights into culture, history, and hidden gems.",
      image: guide,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="facilities-container">
        <h1 className="animated-heading">Explore, Experience, Enjoy!</h1>
        <p className="tagline animated-tagline">Your journey to unforgettable memories starts here.</p>
        <h2 className="section-heading">Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-item animated-item hover-effect">
              <img src={destination.image} alt={destination.name} className="destination-image zoom-effect" />
              <h3>{destination.name}</h3>
            </div>
          ))}
        </div>
        <h2 className="section-heading">Facilities Provided</h2>
        <div className="facilities-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card animated-item hover-effect">
              <img src={facility.image} alt={facility.name} className="facility-image zoom-effect" />
              <h3>{facility.name}</h3>
              <p>{facility.description}</p>
            </div>
          ))}
        </div>
        <h2 className="section-heading">Trip Services</h2>
        <div className="trip-services-grid">
          {tripServices.map((service, index) => (
            <div key={index} className="trip-service-card animated-item hover-effect">
              <img src={service.image} alt={service.name} className="trip-service-image zoom-effect" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Facilities;