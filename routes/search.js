var express = require('express');
var router = express.Router();
const { Op } = require('sequelize');
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
        let { search } = req.params; // extract search term from the URL pat
        
        const multiPurpose = await MultiPurpose.findAll({
            where: {
              name: {
                [Op.like]: `%${search}%`
                }
            }
          });
      
          const detergent = await Detergent.findAll({
            where: {
              name: {
                [Op.like]: `%${search}%`
              }
            }
          });
      
          const topical = await Topical.findAll({
            where: {
              name: {
                [Op.like]: `%${search}%`
              }
            }
          });
      
          const outdoor = await Outdoor.findAll({
            where: {
              name: {
                [Op.like]: `%${search}%`
              }
            }
          });
      
          const results = [...multiPurpose, ...detergent, ...topical, ...outdoor].map(item => item.toJSON());
      
          res.status(200).json(results);
});

module.exports = router;