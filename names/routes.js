const express = require('express');
const router = express.Router();

router.post('/api', addName)
router.get('/api/:user_id', getName)
router.put('/api/:user_id', updateName)
router.delete('/api/:user_id', deleteName)

module.exports = router