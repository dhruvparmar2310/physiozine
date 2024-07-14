import React, { useEffect, useState } from 'react';

const GoogleReviews = ({ placeId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=AIzaSyAzA0Xl-hB73qa5RpvC8OeV87XIVrMzE3o`);
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                const data = await response.json();
                setReviews(data.result.reviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, [placeId]);

    return (
        <div>
            <h2>Google Reviews</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}</p>
                        <p>Author: {review.author_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoogleReviews;