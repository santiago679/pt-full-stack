const { generateToken } = require('../../../../shared/utils/util');
const { AdminServicesImpl } = require('../../../domain/services/AdminServicesImpl');

const userLogin = async (req, res, repository, next) => {
    try {
        const { admin } = req.body;

        // Instancia del servicio pasando el repositorio
        const adminService = new AdminServicesImpl(repository);

        const isValid = await adminService.validateCredentials(admin);

        if (!isValid) {
            return res.status(401).json({
                message: "Unauthorized",
                status: 401
            });
        }

        const token = generateToken(admin);

        return res.status(200).json({
            data: { token },
            status: 200,
            message: 'Ingreso exitoso'
        });

    } catch (err) {
        next(err);
    }
}

module.exports = { userLogin };
