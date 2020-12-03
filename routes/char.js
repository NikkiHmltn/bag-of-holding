const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios')
const bodyParser =require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/create', (req, res) => {
    db.classes.findAll().then(allClasses => {
        console.log(allClasses)
        res.render('char/create', {allClasses})
    })
})




module.exports = router;