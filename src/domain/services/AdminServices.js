const { IAdminServices } = require('../../ports/input/IAdminServices')
const { IAdminRepository } = require('../../ports/output/IAdminRepository')

class AdminServices extends IAdminServices {

    async validateCredentials(user) {
        const repositorio = new IAdminRepository()
        await repositorio.validateCredentials(user)
    }
}

module.exports = { AdminServices }