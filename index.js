const zrapi = require("zrapi");
const axios = require('axios');

// Map of Textpro effect numbers to their respective URLs
const textproUrls = {
  1: "https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html",
  2: "https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html",
  // ... (all 182 URLs)
  182: "https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html"
};

// Function to generate the Textpro image
async function generateTextproImage(text, number) {
  if (!text || !number || !textproUrls[number]) {
    throw new Error('Invalid text or number parameter.');
  }

  const urlpro = textproUrls[number];

  // Generate Textpro image using zrapi
  const { result } = await zrapi.textpro(urlpro, [text]); 

  // Fetch the image data using axios
  const response = await axios.get(result, { responseType: 'arraybuffer' }); 

  return response.data; 
}

module.exports = { generateTextproImage }; // Export the function for use in server.js
