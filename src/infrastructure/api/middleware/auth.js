// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//     const token = req.header('Authorization');

//     if (!token) return res.status(401).json({ message: 'Acceso denegado' });

//     try {
//         const verificado = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
//         req.usuario = verificado;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Token inválido' });
//     }
// };

// module.exports = authMiddleware;