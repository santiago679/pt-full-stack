const { IAdminServices } = require('../IPrimary/IAdminServices')
const { IAdminRepository } = require('../ISecondary/ICommonRepository')

class AdminServices extends IAdminServices {

    async validateCredentials(user) {
        const repositorio = new IAdminRepository()
        await repositorio.validateCredentials(user)
    }
}

module.exports = { AdminServices }