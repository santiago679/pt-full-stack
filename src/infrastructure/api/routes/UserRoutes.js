const UserRouter = express.Router();
const { UserRepositoryImpl } = require('../../db/repositories/UserRepositoryImpl');
const { UserServicesImpl } = require('../../../domain/services/UserServicesImpl');
const UserController = require('../controllers/UserController');
const { authMiddleware } = require('../middleware/auth');

const userRepository = new UserRepositoryImpl()
const userServices = new UserServicesImpl(userRepository)
const userController = UserController(userServices)

UserRouter.get('/', userController.getAllUsers);
UserRouter.get('/:dni', userController.getUserByDni);

UserRouter.post('/', authMiddleware, userController.createUser);
UserRouter.put('/:dni', authMiddleware, userController.updateUser);
UserRouter.delete('/:dni', authMiddleware, userController.deleteUser);

module.exports =  UserRouter;
