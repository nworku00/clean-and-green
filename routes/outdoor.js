var express = require('express');
var router = express.Router();
var {Outdoor} = require("../models")

/* GET home page. */
router.get('/', async(req, res, next) => {
    let outdoor = await Outdoor.findAll();
    res.status(200).json(outdoor)
});

module.exports = router;