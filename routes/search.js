var express = require('express');
var router = express.Router();
var {MultiPurpose, Detergent, Topical, Outdoor} = require("../models")

/* GET home page. */
router.get('/', async (req, res, next) => {
    let multiPurpose = await MultiPurpose.findAll();
    let detergent = await Detergent.findAll();
    let topical = await Topical.findAll();
    let outdoor = await Outdoor.findAll();
    let results = { multiPurpose, detergent, topical, outdoor }
    res.status(200).json(results)
});
router.get('/:search', async (req, res, next) => {
    try {
        let { search } = req.params; // extract search term from the URL path
        let multiPurpose = await MultiPurpose.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%` // use the like operator to search for records that match the query
                }
            }
        });
        let detergent = await Detergent.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%`
                }
            }
        });
        let topical = await Topical.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%`
                }
            }
        });
        let outdoor = await Outdoor.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%`
                }
            }
        });
        let results = { multiPurpose, detergent, topical, outdoor };
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching data from database" });
    }
});

module.exports = router;