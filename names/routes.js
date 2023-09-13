const express = require('express');
const router = express.Router();
const {
   saveName,
   getName,
   editName,
   deleteName
} = require('./controller')

router.post('/api', saveName)
router.get('/api/:user_id', getName)
router.put('/api/:user_id', editName)
router.delete('/api/:user_id', deleteName)

module.exports = router