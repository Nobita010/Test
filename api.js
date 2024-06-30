const express = require('express');
const axios = require('axios');
const request = require('request');
const zrapi = require("zrapi");
const router = express.Router();

router.get('/textpro', async (req, res, next) => {
    if (!req.query.text || !req.query.number) {
        return res.status(400).json({ error: "Missing text or number parameter" });
    }

    const number = parseInt(req.query.number);
    const urlMap = {
        
        1: "https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html",
        2: "https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html",
        
        4: "https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html",
        5: "https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html" 
    };

    if (!urlMap[number]) {
        return res.status(400).json({ error: "Invalid number parameter" });
    }

    const urlpro = urlMap[number];

    try {
        const data = await zrapi.textpro(urlpro, [req.query.text]);
        const requestSettings = {
            url: data,
            method: 'GET',
            encoding: null
        };

        request(requestSettings, function (error, response, body) {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: "Internal server error" });
            }
            res.set('Content-Type', 'image/png');
            res.send(body);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error processing image" });
    }
});

module.exports = router;
