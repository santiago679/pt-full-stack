module.exports = (services) => ({
    getAllUsers: async (req, res, next) => {
        try {
            const usersList = await services.getAll();

            return res.status(200).json({
                data: usersList.rows,
                total: usersList.count,
                message: 'Users obtained correctly',
                status: 200
            });
        } catch (error) {
            next(error);
        }
    },

    getUserByDni: async (req, res, next) => {
        try {
            const dni = req.params.dni;
            const filteredUser = await services.get(dni);

            if (!filteredUser) {
                return res.status(404).json({
                    message: 'User not found',
                    status: 404
                });
            }

            return res.status(200).json({
                data: filteredUser,
                message: 'User found',
                status: 200
            });
        } catch (error) {
            next(error);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const userData = req.body;
            const newUser = await services.add(userData);

            return res.status(201).json({
                data: newUser,
                message: 'User created successfully',
                status: 201
            });
        } catch (error) {
            if (error.name === 'DuplicateUserException') {
                return res.status(409).json({
                    message: error.message,
                    status: 409
                });
            }
            next(error);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const userData = req.body;
            const updatedUser = await services.edit(userData);

            return res.status(200).json({
                data: updatedUser,
                message: 'User updated successfully',
                status: 200
            });
        } catch (error) {
            next(error);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const dni = req.params.dni;
            await services.remove(dni);

            return res.status(200).json({
                message: 'User removed successfully',
                status: 200
            });
        } catch (error) {
            next(error);
        }
    }
})
