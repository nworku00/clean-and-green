var express = require('express');
var router = express.Router();
var {Topical} = require("../models")

/* GET home page. */
router.get('/', async(req, res, next) => {
    let topical = await Topical.findAll();
    res.status(200).json(topical)
});

module.exports = router;