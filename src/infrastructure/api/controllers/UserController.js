const { UserServicesImpl } = require('../../../domain/services/UserServicesImpl');

/**
 * Obtener todos los usuarios
 */
const getAllUsers = async (req, res, repository, next) => {
    try {
        const service = new UserServicesImpl(repository);
        const result = await service.getAll();

        return res.status(200).json({
            data: result.rows,
            total: result.count,
            message: 'Usuarios obtenidos correctamente',
            status: 200
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Obtener usuario por DNI
 */
const getUserByDni = async (req, res, repository, next) => {
    try {
        const dni = req.params.dni;
        const service = new UserServicesImpl(repository);
        const user = await service.get(dni);

        if (!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
                status: 404
            });
        }

        return res.status(200).json({
            data: user,
            message: 'Usuario encontrado',
            status: 200
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Agregar nuevo usuario
 */
const createUser = async (req, res, repository, next) => {
    try {
        const userData = req.body;
        const service = new UserServicesImpl(repository);
        const user = await service.add(userData);

        return res.status(201).json({
            data: user,
            message: 'Usuario creado exitosamente',
            status: 201
        });
    } catch (error) {
        if (error.name === 'DuplicateUserException') {
            return res.status(409).json({
                message: 'Ya existe un usuario con ese DNI',
                status: 409
            });
        }

        next(error);
    }
};

/**
 * Editar usuario
 */
const updateUser = async (req, res, repository, next) => {
    try {
        const userData = req.body;
        const service = new UserServicesImpl(repository);
        const updated = await service.edit(userData);

        return res.status(200).json({
            data: updated,
            message: 'Usuario actualizado exitosamente',
            status: 200
        });
    } catch (error) {
        next(error);
    }
};

/**
 * Eliminar usuario por DNI
 */
const deleteUser = async (req, res, repository, next) => {
    try {
        const dni = req.params.dni;
        const service = new UserServicesImpl(repository);
        await service.remove(dni);

        return res.status(200).json({
            message: 'Usuario eliminado exitosamente',
            status: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getUserByDni,
    createUser,
    updateUser,
    deleteUser
};
