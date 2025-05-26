const { generateToken } = require('../../../../shared/utils/util');

const userLogin = async (req, res, repository, next) => {
    try {
        const { admin } = req.body;
        const validUser = await repository.validateCredentials(admin);

        if (!validUser) {

            res.json({
                message: "Unauthorized",
                status: 401
            });
        }
        const token = generateToken(validUser)

        res.json({
            data: { token },
            status: 200,
            message: 'Ingreso exitoso'
        });

    } catch (err) {
        next(err);
    }
}

module.exports = { userLogin };