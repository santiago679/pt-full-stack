const { validateToken } = require('../../../../shared/utils/util');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. Token no provided' });
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const decoded = validateToken(token);
        req.admin = decoded; 
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = { authMiddleware }
