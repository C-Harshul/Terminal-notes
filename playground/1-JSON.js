const fs = require('fs')

const dataBuffer = fs.readFileSync ('1-JSON.json')
const dataJSON = JSON.parse(dataBuffer.toString());

dataJSON.name = "Harshul"
dataJSON.planet = "Venus"
dataJSON.age = "30"

const newdata = JSON.stringify(dataJSON);

fs.writeFileSync("1-JSON.json",newdata);