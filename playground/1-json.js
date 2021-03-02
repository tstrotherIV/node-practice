const fs = require('fs')

const book = {
  name: "Tom", 
  planet: "Earth", 
  age: 33 
}

const BookJSON = JSON.stringify(book)

fs.writeFileSync('1-json.json', BookJSON)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data =JSON.parse(dataJSON)

console.log(data.name, data.planet, data.age)