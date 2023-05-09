var express = require('express');
var router = express.Router();
var {MultiPurpose, Detergent, Topical, Outdoor} = require("../models")

/* GET home page. */
router.get('/', async (req, res, next) => {
    let multiPurpose = await MultiPurpose.findAll();
    let detergent = await Detergent.findAll();
    let topical = await Topical.findAll();
    let outdoor = await Outdoor.findAll();
    res.status(200).json(multiPurpose,detergent,topical,outdoor)
});

module.exports = router;