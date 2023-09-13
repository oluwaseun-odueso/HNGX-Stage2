const express = require("express");
require('dotenv').config()

const PORT =  process.env.PORT || 5000

const app = express();
app.use(express.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app