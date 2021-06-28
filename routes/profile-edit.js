let express = require('express');

let router = express.Router();

let profileEditController = require('../controllers/profileEditController');

router.get('/', profileEditController.update);
router.post('/', profileEditController.update);


module.exports = router;