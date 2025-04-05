import { useState, useEffect, useRef } from "react";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import React from 'react';
import Masonry from 'react-masonry-css';
import './Gallery.css';
// import { FaInstagram, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Import existing images
import img1 from '../images/img1.png';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img13 from '../images/img13.jpg';
import img14 from '../images/img14.jpg';
import img15 from '../images/img15.jpg';
import img16 from '../images/img16.jpg';
import img17 from '../images/img17.jpg';
import img18 from '../images/img18.jpg';
import img19 from '../images/img19.jpg';
import img20 from '../images/img20.jpg';
import img21 from '../images/img21.jpg';
import img22 from '../images/img22.jpg';

// Import new images
import image1 from '../galleryImg/image1.jpeg';
import image2 from '../galleryImg/image2.jpeg';
import image3 from '../galleryImg/image3.jpeg';
import image4 from '../galleryImg/image4.jpeg';
// import image5 from '../galleryImg/image5.jpeg';
import image6 from '../galleryImg/image6.jpeg';
import image7 from '../galleryImg/image7.jpeg';
import image8 from '../galleryImg/image8.jpeg';
import image9 from '../galleryImg/image9.jpeg';
import image10 from '../galleryImg/image10.jpeg';
import image11 from '../galleryImg/image11.jpeg';
import image12 from '../galleryImg/image12.jpeg';
import image13 from '../galleryImg/image13.jpeg';
// import image14 from '../galleryImg/image14.jpeg';
import image15 from '../galleryImg/image15.jpeg';

// Import videos
import video1 from '../galleryImg/video1.mp4';
import video2 from '../galleryImg/video2.mp4';
import video3 from '../galleryImg/video3.mp4';
import video4 from '../galleryImg/video4.mp4';
import video5 from '../galleryImg/video5.mp4';
import video6 from '../galleryImg/video6.mp4';
import video7 from '../galleryImg/video7.mp4';
import video8 from '../galleryImg/video8.mp4';
import video9 from '../galleryImg/video9.mp4';
import video10 from '../galleryImg/video10.mp4';
import video11 from '../galleryImg/video11.mp4';
import video12 from '../galleryImg/video12.mp4';

function Gallery()
{
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(null);
    // const videoRef = useRef(null);

    // const openModal = (item) => {
    //     setSelectedItem(item);
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setSelectedItem(null);
    //     setIsModalOpen(false);
    // };
    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
        // If it's a video, we'll need to handle autoplay when the modal opens
        if (item.type === 'video' && videoRef.current) {
            videoRef.current.play();
        }
    };

    const closeModal = () => {
        if (selectedItem?.type === 'video' && videoRef.current) {
            videoRef.current.pause();
        }
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    // Close modal on escape key press
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.addEventListener('keydown', handleEsc);
        };
    }, []);

    const galleryItems = [
        // Existing images
        {
            type: 'image',
            src: img1,
            alt: 'Tropical Paradise',
            width: '600',
            height: '400',
            title: 'Exotic Beach Getaway',
            description: 'Experience the serene beauty of crystal-clear waters and white sandy beaches. A perfect escape!',
        },
        {
            type: 'image',
            src: img2,
            alt: 'City Exploration',
            width: '400',
            height: '600',
            title: 'Urban Exploration Tour',
            description: 'Discover the vibrant culture and hidden gems of bustling city life.',
        },
        {
            type: 'image',
            src: img3,
            alt: 'Safari Adventure',
            width: '800',
            height: '600',
            title: 'Wild Safari Expedition',
            description: 'Witness the majestic wildlife in their natural habitat. An unforgettable adventure awaits.',
        },
        {
            type: 'image',
            src: img4,
            alt: 'Mountain Views',
            width: '500',
            height: '300',
            title: 'Mountain Adventure',
            description: 'Experience breathtaking mountain landscapes.',
        },
        {
            type: 'image',
            src: img5,
            alt: 'Beach Life',
            width: '600',
            height: '400',
            title: 'Tropical Beach',
            description: 'Relax on pristine beaches.',
        },
        {
            type: 'image',
            src: img6,
            alt: 'Mountain Scenery',
            width: '400',
            height: '600',
            title: 'Mountain View',
            description: 'Breathtaking mountain views.',
        },
        {
            type: 'image',
            src: img7,
            alt: 'Cultural Experience',
            width: '600',
            height: '400',
            title: 'Cultural Heritage',
            description: 'Immerse in local traditions.',
        },
        {
            type: 'image',
            src: img8,
            alt: 'City Lights',
            width: '800',
            height: '600',
            title: 'Urban Adventure',
            description: 'Experience vibrant city life.',
        },
        // New images with videos interspersed
        {
            type: 'image',
            src: image1,
            alt: 'New Travel Experience 1',
            width: '600',
            height: '400',
            title: 'New Destination',
            description: 'Discover exciting new locations.',
        },
        {
            type: 'video',
            src: video1,
            alt: 'Travel Video 1',
            width: '720',
            height: '480',
            title: 'Adventure Highlights',
            description: 'Exciting moments from our travels.',
        },
        {
            type: 'image',
            src: image2,
            alt: 'New Travel Experience 2',
            width: '600',
            height: '400',
            title: 'Cultural Discovery',
            description: 'Explore rich cultural heritage.',
        },
        {
            type: 'video',
            src: video2,
            alt: 'Travel Video 2',
            width: '720',
            height: '480',
            title: 'Nature Experience',
            description: 'Beautiful natural wonders.',
        },
        // Continue with remaining existing images
        {
            type: 'image',
            src: img9,
            alt: 'Wildlife Safari',
            width: '500',
            height: '300',
            title: 'Safari Adventure',
            description: 'Encounter amazing wildlife.',
        },
        {
            type: 'image',
            src: img10,
            alt: 'Lake View',
            width: '600',
            height: '600',
            title: 'Peaceful Lake',
            description: 'Serene lake views.',
        },
        // Add more new images and videos
        {
            type: 'video',
            src: video3,
            alt: 'Travel Video 3',
            width: '720',
            height: '480',
            title: 'Ocean Adventure',
            description: 'Explore underwater wonders.',
        },
        {
            type: 'image',
            src: image3,
            alt: 'New Travel Experience 3',
            width: '600',
            height: '400',
            title: 'Island Paradise',
            description: 'Tropical island getaway.',
        },
        // Continue pattern with remaining images and videos...
        {
            type: 'image',
            src: img11,
            alt: 'Forest Trail',
            width: '700',
            height: '400',
            title: 'Nature Trail',
            description: 'Explore forest paths.',
        },
        {
            type: 'video',
            src: video4,
            alt: 'Travel Video 4',
            width: '720',
            height: '480',
            title: 'Mountain Trek',
            description: 'Journey through mountains.',
        },
        {
            type: 'image',
            src: img12,
            alt: 'Ancient Ruins',
            width: '400',
            height: '500',
            title: 'Historical Discovery',
            description: 'Explore ancient history.',
        },
        {
            type: 'image',
            src: image4,
            alt: 'New Travel Experience 4',
            width: '600',
            height: '400',
            title: 'Local Life',
            description: 'Experience authentic culture.',
        },
        {
            type: 'video',
            src: video5,
            alt: 'Travel Video 5',
            width: '720',
            height: '480',
            title: 'Beach Life',
            description: 'Coastal adventures and relaxation.',
        },
        {
            type: 'image',
            src: img13,
            alt: 'Desert Safari',
            width: '900',
            height: '600',
            title: 'Desert Adventure',
            description: 'Journey through golden sands.',
        },
        
        {
            type: 'video',
            src: video6,
            alt: 'Travel Video 6',
            width: '720',
            height: '480',
            title: 'Wildlife Safari',
            description: 'Encounter exotic wildlife.',
        },
        {
            type: 'image',
            src: img14,
            alt: 'Countryside',
            width: '600',
            height: '300',
            title: 'Rural Escape',
            description: 'Peaceful countryside views.',
        },
        {
            type: 'image',
            src: image6,
            alt: 'New Travel Experience 6',
            width: '600',
            height: '400',
            title: 'Temple Tour',
            description: 'Ancient spiritual sites.',
        },
        {
            type: 'video',
            src: video7,
            alt: 'Travel Video 7',
            width: '720',
            height: '480',
            title: 'River Journey',
            description: 'Scenic river explorations.',
        },
        {
            type: 'image',
            src: img15,
            alt: 'Snowy Peaks',
            width: '300',
            height: '400',
            title: 'Winter Wonder',
            description: 'Snow-capped mountain beauty.',
        },
        {
            type: 'image',
            src: image7,
            alt: 'New Travel Experience 7',
            width: '600',
            height: '400',
            title: 'City Lights',
            description: 'Urban nightlife and culture.',
        },
        {
            type: 'video',
            src: video8,
            alt: 'Travel Video 8',
            width: '720',
            height: '480',
            title: 'Cultural Show',
            description: 'Traditional performances.',
        },
        {
            type: 'image',
            src: img16,
            alt: 'Local Market',
            width: '500',
            height: '500',
            title: 'Market Life',
            description: 'Vibrant local markets.',
        },
        {
            type: 'image',
            src: image8,
            alt: 'New Travel Experience 8',
            width: '600',
            height: '400',
            title: 'Beach Sunset',
            description: 'Golden hour by the ocean.',
        },
        {
            type: 'video',
            src: video9,
            alt: 'Travel Video 9',
            width: '720',
            height: '480',
            title: 'Adventure Sports',
            description: 'Thrilling outdoor activities.',
        },
        {
            type: 'image',
            src: img17,
            alt: 'Sunset View',
            width: '700',
            height: '500',
            title: 'Golden Hour',
            description: 'Magical sunset moments.',
        },
        {
            type: 'image',
            src: image9,
            alt: 'New Travel Experience 9',
            width: '600',
            height: '400',
            title: 'Island Life',
            description: 'Paradise island experiences.',
        },
        {
            type: 'video',
            src: video10,
            alt: 'Travel Video 10',
            width: '720',
            height: '480',
            title: 'Desert Safari',
            description: 'Desert adventures and exploration.',
        },
        {
            type: 'image',
            src: img18,
            alt: 'River Cruise',
            width: '400',
            height: '300',
            title: 'River Views',
            description: 'Peaceful river journeys.',
        },
        {
            type: 'image',
            src: image10,
            alt: 'New Travel Experience 10',
            width: '600',
            height: '400',
            title: 'Forest Trek',
            description: 'Adventure through wilderness.',
        },
        {
            type: 'video',
            src: video11,
            alt: 'Travel Video 11',
            width: '720',
            height: '480',
            title: 'Ocean Life',
            description: 'Underwater discoveries.',
        },
        {
            type: 'image',
            src: img19,
            alt: 'Historical Site',
            width: '800',
            height: '400',
            title: 'Ancient Wonder',
            description: 'Historical landmarks.',
        },
        {
            type: 'image',
            src: image11,
            alt: 'New Travel Experience 11',
            width: '600',
            height: '400',
            title: 'Mountain Life',
            description: 'High altitude adventures.',
        },
        {
            type: 'video',
            src: video12,
            alt: 'Travel Video 12',
            width: '720',
            height: '480',
            title: 'City Tour',
            description: 'Urban exploration highlights.',
        },
        {
            type: 'image',
            src: img20,
            alt: 'River Scene',
            width: '400',
            height: '300',
            title: 'Riverside Beauty',
            description: 'Scenic water views.',
        },
        {
            type: 'image',
            src: image12,
            alt: 'New Travel Experience 12',
            width: '600',
            height: '400',
            title: 'Cultural Heritage',
            description: 'Traditional art and culture.',
        },
        {
            type: 'image',
            src: img21,
            alt: 'Historical Monument',
            width: '800',
            height: '400',
            title: 'Heritage Site',
            description: 'Ancient architecture.',
        },
        {
            type: 'image',
            src: image13,
            alt: 'New Travel Experience 13',
            width: '600',
            height: '400',
            title: 'Beach Paradise',
            description: 'Tropical beach getaway.',
        },
        {
            type: 'image',
            src: img22,
            alt: 'Historical Place',
            width: '800',
            height: '400',
            title: 'Historic Journey',
            description: 'Time-worn treasures.',
        },
        {
            type: 'image',
            src: image15,
            alt: 'New Travel Experience 15',
            width: '600',
            height: '400',
            title: 'Luxury Travel',
            description: 'Premium travel experiences.',
        },
    ];

  
    

    return (
        <>
            <NavBar />
            
            <div className="gallery-container">
            <h1>Our Travel Memories</h1>
            <p className="gallery-intro">
                Explore our curated collection of unforgettable travel experiences. Each image and video tells a story of adventure, culture, and breathtaking beauty.
            </p>
            <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                    <div key={index} className="gallery-item" onClick={() => openModal(item)}>
                        {item.type === 'image' ? (
                            <div className="image-wrapper">
                                <img src={item.src} alt={item.alt} loading="lazy" />
                                <div className="click-indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zm-11 0h7v7H3v-7z" />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div className="video-wrapper">
                                <video width={item.width} height={item.height}>
                                    <source src={item.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="video-indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        )}
                        {/* <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div> */}
                    </div>
                ))}
            </div>

            {isModalOpen && selectedItem && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        {selectedItem.type === 'image' ? (
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.alt}
                                className="modal-media"
                            />
                        ) : (
                            <video
                                ref={videoRef}
                                controls
                                className="modal-media"
                                autoPlay
                            >
                                <source src={selectedItem.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            )}
        </div>
            {/* <Footer /> */}
        </>
    );
}
export default Gallery;