const express = require('express');
const router = express.Router();
const NamesController = require('./controller')

router.post('/api', )
router.get('/api/:user_id', getName)
router.put('/api/:user_id', editName)
router.delete('/api/:user_id', deleteName)

module.exports = router