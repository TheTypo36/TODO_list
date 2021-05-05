const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);
router.post('/add-task', homeController.update);
router.post('/delete-task', homeController.del);
module.exports = router;
