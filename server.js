const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'YOUR_API_KEY_HERE';

app.get('/api/reviews', async (req, res) => {
    try {
        const placeId = '32d9e923d49e97ca'; // Your Place ID
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${GOOGLE_PLACES_API_KEY}`
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 