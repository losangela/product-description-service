const router = require('express').Router();
const controller = require('./controller');

// Fetch or delete all data 
// router.route('/allDocs')
//   .get(controller.findAll)
//   .delete(controller.deleteAll);

// // Fetch one dress randomly
router.route('/findOneRandom')
  .get(controller.findOneRandom);

// // Fetch 5 dresses for Recommendation Bar
router.route('/recommendation')
  .get(controller.recommendation);

module.exports = router;