const { generateToken } = require('../../../../shared/utils/util');
const { AdminServicesImpl } = require('../../../domain/services/AdminServicesImpl');

const userLogin = async (req, res, repository, next) => {
    try {
        const { admin } = req.body;

        if (!admin || !admin.email || !admin.password) {
            return res.status(400).json({
                message: "Email y contraseña son obligatorios",
                status: 400
            });
        }

        // Instanciar el servicio pasando el repositorio
        const adminService = new AdminServicesImpl(repository);

        // Validar credenciales
        const validUser = await adminService.validateCredentials(admin);

        if (!validUser) {
            return res.status(401).json({
                message: "Credenciales inválidas",
                status: 401
            });
        }

        // Generar token usando los datos del usuario
        const token = generateToken(validUser);

        return res.status(200).json({
            data: { token },
            status: 200,
            message: 'Ingreso exitoso'
        });

    } catch (err) {
        return next(err);
    }
};

module.exports = { userLogin };
