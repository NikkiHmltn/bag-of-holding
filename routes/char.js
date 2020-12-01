const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/create', (req, res) => {
    async function getClassInfo() {
        let classInfo =  await axios.get('https://api.open5e.com/classes/') 
        let classResults = classInfo.data.results
    }
})

module.exports = router;