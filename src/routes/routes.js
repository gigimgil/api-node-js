const express = require('express'); 
const router = express.Router(); 

const RotasGiulia = require('./routes-giulia'); 


router.use('/', RotasGiulia);

module.exports = router;