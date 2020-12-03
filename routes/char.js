const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios')


router.get('/create', (req, res) => {

    let objInfo = {};
    db.classes.findAll().then(classes => {
        let allClasses = classes;
        objInfo.allClasses = classes;
         db.race.findAll().then(races => {
        let allRaces = races;
        objInfo.allRaces = races
        })
        axios.get(`http://roll.diceapi.com/json/4d6`)
        .then(response => {
            let valueDie = [];
            let die = response.data.dice
            for(let i = 0;i <  die.length; i++){
                let values = die[i].value
                valueDie.push(values)
            }
            console.log(valueDie)
            res.render('char/create', objInfo)
        })
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