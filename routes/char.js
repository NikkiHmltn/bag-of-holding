const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios')


router.get('/create', async (req, res) => {

    let oneRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let twoRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let threeRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let fourRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let fiveRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let sixRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let objInfo = {};

    await axios.all([oneRoll, twoRoll, threeRoll,fourRoll,fiveRoll,sixRoll])
        .then(axios.spread((...responses) => {
            const diceOne = responses[0]
            const diceTwo = responses[1]
            const diceThree = responses[2]
            const diceFour = responses[3]
            const diceFive = responses[4]
            const diceSix = responses[5]
            let dieOne = diceOne.data.dice;
            let valueDieOne = [];
            for(let i = 0;i <  dieOne.length; i++){
                let values = dieOne[i].value
                valueDieOne.push(values)
            }
            console.log(valueDieOne)
            let dieTwo = diceTwo.data.dice;
            let valueDieTwo = [];
            for(let i = 0;i <  dieTwo.length; i++){
                let values = dieTwo[i].value
                valueDieTwo.push(values)
            }
            console.log(valueDieTwo)
            let dieThree = diceThree.data.dice;
            let valueDieThree = [];
            for(let i = 0;i <  dieThree.length; i++){
                let values = dieThree[i].value
                valueDieThree.push(values)
            }
            console.log(valueDieThree)
            let dieFour = diceFour.data.dice;
            let valueDieFour = [];
            for(let i = 0;i <  dieFour.length; i++){
                let values = dieFour[i].value
                valueDieFour.push(values)
            }
            console.log(valueDieFour)
            let dieFive = diceFive.data.dice;
            let valueDieFive = [];
            for(let i = 0;i <  dieFive.length; i++){
                let values = dieFive[i].value
                valueDieFive.push(values)
            }
            console.log(valueDieFive)
            let dieSix = diceSix.data.dice;
            let valueDiceSix = [];
            for(let i = 0;i <  dieSix.length; i++){
                let values = dieSix[i].value
                valueDiceSix.push(values)
            }
            console.log(valueDiceSix)

            let min = Math.min(...valueDieOne);
            let newValue = valueDieOne.filter(e => e != min);
            console.log(newValue)
            db.classes.findAll().then(classes => {
                let allClasses = classes;
                objInfo.allClasses = classes;
                db.race.findAll().then(races => {
                let allRaces = races;
                objInfo.allRaces = races
                res.render('char/create', objInfo)
                })
            })
         })
    )})


router.post('/create', (req, res) => {
    // db.classes.findOne({
    //     where: {name: `${req.body.class}`}
    // }).then(foundClass => {
    //     let classInfo = foundClass
    //     res.render('char/create', {classInfo})
    // })
})


module.exports = router;