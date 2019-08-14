const express = require('express');
const router = express.Router();
const controller = require('../controllers/search');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.checkAuth, controller.index);
module.exports = router;