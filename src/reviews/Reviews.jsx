import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/navBar';
import Footer from '../footer/footer';
import './Reviews.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import GoogleIcon from '@mui/icons-material/Google';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CircularProgress from '@mui/material/CircularProgress';
import { GOOGLE_PLACES_API_KEY, PLACE_ID } from '../config/googlePlaces';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const googleProfileUrl = "https://www.google.com/search?sca_esv=d4ac063c10135007&sxsrf=AHTn8zrnAjXsPhuWz9VQBVjp-hVDaEJs7g:1743845025982&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzaxUYRC7Y2bGOyUeYC2BA_XEGsoE4b9V4aQTyCEqo-5kMOnncj2KLbsmbSmylLmIbk8vZ2_vQT9c5I5e2vkVkec4KgIMZD8DifWIcAHd3c1e1wwe1F0nYpQoSIu2mAJ5SUCRYUMf9q0yRXMcW02GIEiK7_V0YtLBtOOEm9iWsK58ibFAnY3FB25e2ZRyyTIgomUjIwHYpzTLRoAUZG7koO2OlCbK7a3sbRrPMfuL3PEgYnI9pg%3D%3D&q=Sanwariya+Travels+%7C+Tourist+Bus+Service+in+Chandigarh+%7C+Travel+Agency+in+Chandigarh,+Panchkula,Baltana,+Zirakpur+%26+Mohali+Reviews&sa=X&ved=2ahUKEwiltMT6yMCMAxX-wzgGHUoCCWoQ0bkNegQIQRAE&biw=1280&bih=665&dpr=1.5#lrd=0x390f953cf3fd1765:0x32d9e923d49e97ca,3,,,,";

    const fetchGoogleReviews = async () => {
        try {
            setReviews(sampleReviews);
            // const response = await fetch('http://localhost:5000/api/reviews');

            // if (!response.ok) {
            //     throw new Error('Failed to fetch reviews');
            // }

            // const data = await response.json();
            
            // if (data.result && data.result.reviews) {
            //     setReviews(data.result.reviews);
            // } else {
            //     setReviews(sampleReviews); // Fallback to sample reviews if API fails
            // }
        } catch (err) {
            console.error('Error fetching reviews:', err);
            setError('Failed to load reviews. Showing sample reviews instead.');
            setReviews(sampleReviews); // Fallback to sample reviews
        } finally {
            setLoading(false);
        }
    };

    const handleAddReview = () => {
        window.open(googleProfileUrl, '_blank');
    };

    // Function to render stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<StarIcon key={i} className="star-icon" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<StarHalfIcon key={i} className="star-icon" />);
            } else {
                stars.push(<StarBorderIcon key={i} className="star-icon" />);
            }
        }
        return stars;
    };

    // Sample reviews data (replace this with actual API integration)
    const sampleReviews = [
        {
            author_name: "Babita Chauhan",
            rating: 5,
            relative_time_description: "a year ago",
            text: "Good service. We enjoyed alot. All arrangements done by Mr. Rajat (the organiser) are very appreciable...",
            profile_photo_url: null
        },
        {
            author_name: "Gagan Jangra",
            rating: 5,
            relative_time_description: "8 months ago",
            text: "Awesome trip with rajat...very nice and gentle boy...3 times already with rajat...what is the environment of the bus...vibes of family and friends have come on the trip",
            profile_photo_url: null
        },
        {
            author_name: "Vikram Singh Toor",
            rating: 5,
            relative_time_description: "3 months ago",
            text: "One of the best travelers. Your tea, breakfast, lunch, dinner and rooms are provided very well or you feel like you are in a family atmosphere.. trust me this is my first trip, it will be so good than I thought.",
            profile_photo_url: null
        },
        {
            author_name: "Anshul Thakur",
            rating: 5,
            relative_time_description: "8 months ago",
            text: "Very nice trip, well organised, they give multiple break during bus journey, very good stay at KhatuShyam, Rajat is their for all your problems. Highly recommend for yatras",
            profile_photo_url: null
        },
        
        {
            author_name: "Sunil Kumar",
            rating: 5,
            relative_time_description: "a year ago",
            text: "I have just returned home from my trip and I would like to thank you for organizing our trip for us. We had a great time each day at destination and the hotel chosen by you was really very nice. The drive provided by you was successful and it was used very quickly and slowly.",
            profile_photo_url: null
        },
        {
            author_name: "Jaipal Moolchandani",
            rating: 5,
            relative_time_description: "6 months ago",
            text: "The Mathura-Vrindavan tour from 12th to 16th September was very pleasant. There was arrangement for a deluxe bus. Enjoyed a lot. The fare was also very low. I am waiting for the next tour. Rajat ji is very hardworking, thanks a lot to his entire team.",
            profile_photo_url: null
        },
        {
            author_name: "Nitin Goyal",
            rating: 5,
            relative_time_description: "3 months ago",
            text: "I had an exceptional experience with Sanwariya Travel! The entire journey was well-organized, comfortable, and smooth. The staff was professional, courteous, and attentive to every detail. From the booking process to the trip's end, everything exceeded my expectations. I highly recommend Sanwariya Travel for anyone looking for a hassle-free and enjoyable travel experience. If I could, I'd give them 7 stars!",
            profile_photo_url: null
        },
        
        {
            author_name: "Rj Saisy",
            rating: 5,
            relative_time_description: "6 months ago",
            text: "Recently I traveled to Khatu Shyam Ji and Salasar Dham with Sanwariya Travels, which was an extremely wonderful and emotional experience. All the arrangements during the trip were excellent. The cleanliness of the vehicle, the timely arrival and the travel guidance were all excellent. The team of Sanwariya Travels supported us at every step and made the trip a memorable experience. The opportunity to immerse myself in the devotion of Khatu Shyam Ji and Salasar Dham is something I thank Sanwariya for. Travels wholeheartedly. It was definitely a wonderful and enjoyable trip.",
            profile_photo_url: null
        },
        
        {
            author_name: "Bharti Manocha",
            rating: 5,
            relative_time_description: "2 month ago",
            text: "This was my and my family's first trip with Sanwariya Travels. Rajat supported us completely to make this trip a success.Proper bus service, accommodation arrangements and every problem faced during the journey has been taken care of very well by him.He is a very respectful, kind and cool person. The way he handled the whole yatra was superb. I recommend Sanwariya Travels for your yatras. Thank you for this unforgettable yatra .Radhe Radhe ☺️",
            profile_photo_url: null
        },
        {
            author_name: "Happy Singh",
            rating: 5,
            relative_time_description: "a months ago",
            text: "Heartfelt thanks to sanwariya travel! You made our journey unforgettable.your hardwork,hospitality, and cooperation were unexceptional.with look forward to travelling with you again soon! Feeling happy after the holy bath on basant panchmi in Mahakumbh",
            profile_photo_url: null
        },
        {
            author_name: "Seema Sharma",
            rating: 5,
            relative_time_description: "a year ago",
            text: "I have a great experience with sanwariya travel. Very good service and behaviour enjoyed the trip at very reasonable rates.and Rajat very helpful person.",
            profile_photo_url: null
        },{
            author_name: "Ayush Garg",
            rating: 5,
            relative_time_description: "11 months ago",
            text: "Best tour of life.Rajat the coordinator of the bus was great and a very helpful at every point of tour.Enjoyed a lot also liked the management of the tour.",
            profile_photo_url: null
        }
    ];

    useEffect(() => {
        fetchGoogleReviews();
    }, []);

    return (
        <>
            <NavBar />
            <div className="reviews-container">
                <div className="reviews-header">
                    <h1>Customer Stories</h1>
                    <div className="header-accent"></div>
                    <p className="header-subtitle">Real Experiences, Unforgettable Moments</p>
                    <div className="header-description">
                        <p>Discover what our valued travelers have to say about their journeys with us. 
                           Each review tells a unique story of adventure, discovery, and the exceptional 
                           service that defines our commitment to creating perfect travel experiences.</p>
                    </div>
                    <div className="trust-indicators">
                        <div className="trust-item">
                            <span className="trust-number">1000+</span>
                            <span className="trust-text">Happy Travelers</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-number">4.9</span>
                            <span className="trust-text">Average Rating</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-number">95%</span>
                            <span className="trust-text">Return Customers</span>
                        </div>
                    </div>
                    <button className="add-review-btn" onClick={handleAddReview}>
                        <GoogleIcon className="google-icon" />
                        Write a Review
                        <OpenInNewIcon className="external-link-icon" />
                    </button>
                </div>

                <div className="reviews-content">
                    <div className="google-reviews-header">
                        {/* <GoogleIcon className="google-logo" /> */}
                        <h2>Google Reviews</h2>
                    </div>
                    
                    <div className="reviews-grid">
                        {loading ? (
                            <div className="loading-container">
                                <CircularProgress />
                                <p>Loading reviews...</p>
                            </div>
                        ) : error ? (
                            <div className="error-container">
                                <p>{error}</p>
                            </div>
                        ) : (
                            reviews.map((review, index) => (
                                <div key={index} className="review-card">
                                    <div className="review-header">
                                        <div className="reviewer-info">
                                            <div className="reviewer-avatar">
                                                {review.profile_photo_url ? (
                                                    <img src={review.profile_photo_url} alt={review.author_name} />
                                                ) : (
                                                    review.author_name.split(' ').map(n => n[0]).join('')
                                                )}
                                            </div>
                                            <div className="reviewer-name">{review.author_name}</div>
                                        </div>
                                        <div className="review-rating">
                                            <div className="stars">
                                                {renderStars(review.rating)}
                                            </div>
                                            <div className="review-date">{review.relative_time_description}</div>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <p>{review.text}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Reviews; 