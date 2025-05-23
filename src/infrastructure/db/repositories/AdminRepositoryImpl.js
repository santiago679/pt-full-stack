const IAdminRepository = require('../../../domain/repositories/IAdminRepository')
const AdminModel = require('../models/admin')

class AdminRepositoryImpl extends IAdminRepository {

    async validateCredentials(admin) {

        // const ingresarUsuario = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;

//         const usuarioIngresar = await UsuarioService.buscarUsuario(email);

//         if (!usuarioIngresar || !(await bcrypt.compare(password, usuarioIngresar.password))) {
//             const error = new Error('Credenciales incorrectas');
//             error.statusCode = 401;
//             throw error;
//         }

//         const token = jwt.sign({ id: usuarioIngresar.id, email: usuarioIngresar.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({
//             data: { token },
//             status: 200,
//             message: 'Ingreso exitoso'
//         });

//     } catch (err) {
//         next(err);
//     }
// };

    }
}

