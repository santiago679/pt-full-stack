const express = require('express');
const router = express.Router();

const { userLogin } = require('../controllers/AdminController');
const authMiddleware = require('../../../../shared/middlewares/authMiddleware');
const { AdminRepositoryImpl } = require('../../../infrastructure/repositories/AdminRepositoryImpl');

const repository = new AdminRepositoryImpl();

router.post('/login', (req, res, next) => userLogin(req, res, repository, next));


module.exports = router;
