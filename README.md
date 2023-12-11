# Yelp API Integration in Node.js

This Node.js project demonstrates how to integrate with the Yelp API for searching businesses by name and location, as well as by phone number. It uses Axios for making HTTP requests and dotenv for managing environment variables.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm (Node Package Manager)
- A Yelp API Key

### Installing

A step by step series of examples that tell you how to get a development env running:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/adanzweig/nodejs-yelp.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd nodejs-yelp
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root of your project and add your Yelp API key:

   ```
   TOKEN=YOUR_YELP_API_KEY
   ```

5. **Run the script:**

   ```bash
   node index.js
   ```

## Usage

The script can be used to search for businesses on Yelp using either a search term and location or a phone number. Modify the parameters in the `index.js` file to search for different businesses or phone numbers.

### Functions

- `searchBusiness(term, location)`: Searches for businesses based on a provided term (e.g., 'food') and location (e.g., 'New York').

- `searchByPhone(phone)`: Searches for a business based on a provided phone number.

## Built With

- [Node.js](https://nodejs.org/) - The JavaScript runtime used
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for making requests
- [dotenv](https://github.com/motdotla/dotenv) - Module to load environment variables from a .env file