const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios')

router.get('/create', (req, res) => {
    axios.get('https://api.open5e.com/classes/') 
    .then(response => {
    res.render("char/create", {classInformation: response.data.results})
    })
})

module.exports = router;