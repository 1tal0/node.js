const { Person } = require("./person")
// require("./modules/path.js")
// require("./modules/fs.js")
// require("./modules/http.js")
const dotenv = require("dotenv")
dotenv.config()

require("./modules/express.js")

const connectToDataBase = require("./src/database/connect.js")

connectToDataBase()

// const person = new Person("Italo")

// console.log(person.sayMyName())