const AdminRouter = require('express').Router();
const { AdminRepositoryImpl } = require('../../db/repositories/AdminRepositoryImpl');
const { AdminServicesImpl } = require('../../../domain/services/AdminServicesImpl');
const AdminController = require('../controllers/AdminController');

const adminRepository = new AdminRepositoryImpl()
const adminServices = new AdminServicesImpl(adminRepository)
const adminController = AdminController(adminServices)

AdminRouter.post('/', adminController.userLogin)

module.exports = AdminRouter;
