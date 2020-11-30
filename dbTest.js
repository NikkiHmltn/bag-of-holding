const axios = require('axios')

async function getClassInfo() {
    let classInfo =  await axios.get('https://api.open5e.com/weapons/') 
    let classResults = classInfo.data.results
    console.log(classResults)
    //barbarian [0] weapon prof 'Simple weapons, martial weapons'

    let results = [];

    let toSearch = "Martial";
    
    for(var i=0; i<classResults.length; i++) {
      for(key in classResults[i]) {
        if(classResults[i][key].indexOf(toSearch)!=-1) {
          results.push(classResults[i]);
        }
      }
   console.log(results[i].name)
    }
}

getClassInfo()