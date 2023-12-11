// Importing necessary modules
require('dotenv').config(); // Loads environment variables from a .env file into process.env
const axios = require('axios'); // Axios is used for making HTTP requests

/**
 * Searches for businesses using Yelp's API based on a term and location.
 * 
 * @param {string} term - Search term (e.g., type of food, business name).
 * @param {string} location - The location to search within.
 * @returns {Promise} - A promise that resolves with the search results.
 */
async function searchBusiness(term, location){
    try{
        // Making a GET request to Yelp's business search endpoint
        const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}` // Using the Yelp API key from environment variables
            },
            params: {
                term, location // Query parameters for the search
            }
        });
        return response.data; // Return the response data
    }catch(e){
        console.error('Error', e); // Log any errors that occur
    }
}

/**
 * Searches for a business using Yelp's API based on a phone number.
 * 
 * @param {string} phone - Phone number of the business.
 * @returns {Promise} - A promise that resolves with the search results.
 */
async function searchByPhone(phone){
    try{
        // Making a GET request to Yelp's phone search endpoint
        const response = await axios.get('https://api.yelp.com/v3/businesses/search/phone', {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}` // Using the Yelp API key from environment variables
            },
            params: {
                phone // Query parameter for the phone number
            }
        });
        return response.data; // Return the response data
    }catch(e){
        console.error('Error', e); // Log any errors that occur
    }
}

// Self-invoking async function to execute the search functions
(async()=>{
    const businesses = await searchBusiness('food', 'New York'); // Searching for food-related businesses in New York
    // Uncomment the line below to log the search results for businesses
    // console.log(businesses);

    const business = await searchByPhone('+12127770343'); // Searching for a business with a specific phone number
    console.log(business); // Logging the search results for the business by phone
})();
 