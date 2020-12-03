const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios')
const bodyParser =require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// router.get('/create', (req, res) => {
//     axios.all([axios.get('https://api.open5e.com/classes/'),
//                axios.get('https://api.open5e.com/races/')])
//     .then(axios.spread((classInfo, raceInfo) => { 
//         // console.log(Object.keys(classInfo.data.results[0]))
//     res.render('char/create', {classInformation: classInfo.data.results, raceInfo: raceInfo.data.results})
//     }))
// })




module.exports = router;