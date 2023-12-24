const express = require('express');
const { CreteProductController,GetProductController } = require('../controllers/ProductController');
const { CreateUserController,GetUserController } = require('../controllers/CreateUserController');

const router = express.Router();

router.post('/create_product',CreteProductController);
router.post('/create_user',CreateUserController)
router.post('/get_user',GetUserController);
router.get('/get_product',GetProductController);

module.exports = router;