const axios = require('axios')

async function getClassInfo() {
    let classInfo =  await axios.get('https://api.open5e.com/races/') 
    let classResults = classInfo.data.results
    console.log(classResults)
}

getClassInfo()