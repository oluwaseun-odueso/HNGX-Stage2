const express = require("express");
const cors = require("cors")
require('dotenv').config()

const {
   saveName,
   getName,
   editName,
   deleteName
} = require('./names/controller')

const PORT =  process.env.PORT || 3000

const app = express();

app.use(cors({
   origin: "*"
}))

app.use(express.json())

app.post('/api', saveName)
app.get('/api/:user_id', getName)
app.put('/api/:user_id', editName)
app.delete('/api/:user_id', deleteName)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app;