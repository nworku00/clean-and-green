var express = require('express');
var router = express.Router();
var {Detergent} = require("../models")

/* GET home page. */
router.get('/', async(req, res, next) => {
    let detergent = await Detergent.findAll();
    res.status(200).json(detergent)
});

module.exports = router;