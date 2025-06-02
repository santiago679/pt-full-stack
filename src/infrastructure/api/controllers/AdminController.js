const { generateToken } = require('../../../../shared/utils/util');

const userLogin = async (req, res, services, next) => {
    try {
        const admin = req.body;

        if (!admin || !admin.email || !admin.password) {
            return res.status(400).json({
                message: "Email and password are requierd",
                status: 400
            });
        }

        const validUser = await services.validateCredentials(admin);

        if (!validUser) {
            return res.status(401).json({
                message: "Invalid credentials",
                status: 401
            });
        }

        const token = generateToken(validUser);

        return res.status(200).json({
            data: { token },
            status: 200,
            message: 'Login successfully'
        });

    } catch (err) {
        return next(err);
    }
};

module.exports = { userLogin };
