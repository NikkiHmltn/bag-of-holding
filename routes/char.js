const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');
const { response } = require('express');
const classes = require('../models/classes');

router.get('/create', (req, res) => {

    let objInfo = {};
               
    db.classes.findAll().then(classes => {
        objInfo.allClasses = classes;
        db.race.findAll().then(races => {
            objInfo.allRaces = races
            db.background.findAll().then(backgrounds => {
                objInfo.allBackgrounds = backgrounds
                res.render('char/create', objInfo)
            })
        })
    })
})


router.post('/ability-score', async (req, res) => {
    
    let objectInfo = {};
    
    let oneRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let twoRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let threeRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let fourRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let fiveRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);
    let sixRoll = await axios.get(`http://roll.diceapi.com/json/4d6`);

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
        let minOne = Math.min(...valueDieOne);
        let newValueOne = valueDieOne.filter(e => e != minOne);
        let sumValueOne = newValueOne.reduce((a, b) => a + b, 0)
        objectInfo.sumValueOne = sumValueOne
           
        let dieTwo = diceTwo.data.dice;
        let valueDieTwo = [];
        for(let i = 0;i <  dieTwo.length; i++){
            let values = dieTwo[i].value
            valueDieTwo.push(values)
        }
        let minTwo = Math.min(...valueDieTwo);
        let newValueTwo = valueDieTwo.filter(e => e != minTwo);
        let sumValueTwo = newValueTwo.reduce((a, b) => a + b, 0)
        objectInfo.sumValueTwo = sumValueTwo

        let dieThree = diceThree.data.dice;
        let valueDieThree = [];
        for(let i = 0;i <  dieThree.length; i++){
            let values = dieThree[i].value
            valueDieThree.push(values)
        }
        let minThree = Math.min(...valueDieThree);
        let newValueThree = valueDieThree.filter(e => e != minThree);
        let sumValueThree = newValueThree.reduce((a, b) => a + b, 0)
        objectInfo.sumValueThree = sumValueThree
           
        let dieFour = diceFour.data.dice;
        let valueDieFour = [];
        for(let i = 0;i <  dieFour.length; i++){
            let values = dieFour[i].value
            valueDieFour.push(values)
        }
        let minFour = Math.min(...valueDieFour);
        let newValueFour = valueDieFour.filter(e => e != minFour);
        let sumValueFour = newValueFour.reduce((a, b) => a + b, 0)
        objectInfo.sumValueFour = sumValueFour
           
        let dieFive = diceFive.data.dice;
        let valueDieFive = [];
        for(let i = 0;i <  dieFive.length; i++){
            let values = dieFive[i].value
            valueDieFive.push(values)
        }
        let minFive = Math.min(...valueDieFive);
        let newValueFive = valueDieFive.filter(e => e != minFive);
        let sumValueFive = newValueFive.reduce((a, b) => a + b, 0)
        objectInfo.sumValueFive = sumValueFive

        let dieSix = diceSix.data.dice;
        let valueDiceSix = [];
        for(let i = 0;i <  dieSix.length; i++){
            let values = dieSix[i].value
            valueDiceSix.push(values)
        }
        let minSix = Math.min(...valueDiceSix);
        let newValueSix = valueDiceSix.filter(e => e != minSix);
        let sumValueSix = newValueSix.reduce((a, b) => a + b, 0)
        objectInfo.sumValueSix = sumValueSix

        db.storedChar.create({
            classesId: parseInt(req.body.class),
            raceId: parseInt(req.body.race),
            backgroundId: parseInt(req.body.background),
            userId: req.user.id,
            name: req.body.name,
            age: req.body.age,
            height: req.body.height,
            eyes: req.body.eyes,
            hair: req.body.hair,
            gender: req.body.gender,
            bioDesc: req.body.bioDesc,
        }).then((char)=> {
            objectInfo.charId = char.id
            console.log('added to storedChar!')
            db.classes.findOne({
            where: {
                id: parseInt(req.body.class)
            }
        }).then(className => {
            objectInfo.className = className.name;
                db.race.findOne({
                where: {
                    id: parseInt(req.body.race)
                }
                }).then(raceName => {
                    objectInfo.raceName = raceName.asiDesc
                    console.log(objectInfo)
                res.render('char/ability-score', {objectInfo})
                })
            })
        })
    }))
})

router.put('/ability-score', (req,res) => {

    let charId = parseInt(req.body.charId)
    console.log(req.user)
    db.storedChar.update({
        STR: parseInt(req.body.STR),
        DEX: parseInt(req.body.DEX),
        CON: parseInt(req.body.CON),
        INT: parseInt(req.body.INT),
        WIS: parseInt(req.body.WIS),
        CHA: parseInt(req.body.CHA)
    }, {
        where: {id: charId}
    }).then(() => {
        res.redirect('profile');
    })
})


// router.post('/spells', (req, res) => {
//     let classNum = parseInt(req.body.classId)
//     db.classes.findOne({
//         where: {id: classNum}
//     }).then(className => {
//         classInfo = className.name
//         db.spell.findAll({
//         include: [{
//             model: db.classes,
//              where: {id: classNum},
//         }] 
//         }).then(spells => {
//             res.render('char/spells', {spells, classInfo})
//         })
//     })
// })

module.exports = router;