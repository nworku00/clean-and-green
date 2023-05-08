var express = require('express');
var router = express.Router();
var {MultiPurpose} = require("../models")

/* GET home page. */
router.get('/', async(req, res, next) => {
    let multiPurpose = await MultiPurpose.findAll();
    res.status(200).json(multiPurpose)
});

module.exports = router;