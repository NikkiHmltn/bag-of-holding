const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios')


router.get('/create', (req, res) => {
    db.classes.findAll().then(classes => {
        let allClasses = classes;
        res.render('char/create', {allClasses})
    })
})

router.post('/create', (req, res) => {
    // db.classes.findOne({
    //     where: {name: `${req.body.class}`}
    // }).then(foundClass => {
    //     let classInfo = foundClass
    //     res.render('char/create', {classInfo})
    // })
})


module.exports = router;