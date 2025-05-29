const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUserByDni,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/UserController');

const { UserRepositoryImpl } = require('../../../infrastructure/db/repositories/UserRepositoryImpl');
const {authMiddleware} = require('../middleware/auth');

const repository = new UserRepositoryImpl();


router.get('/', (req, res, next) => getAllUsers(req, res, repository, next));
router.get('/:dni', (req, res, next) => getUserByDni(req, res, repository, next));

router.post('/', authMiddleware, (req, res, next) => createUser(req, res, repository, next));
router.put('/', authMiddleware, (req, res, next) => updateUser(req, res, repository, next));
router.delete('/:dni', authMiddleware, (req, res, next) => deleteUser(req, res, repository, next));

module.exports = router;
