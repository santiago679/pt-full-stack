const { IAdminServices } = require('../../ports/input/IAdminServices')
//const { IAdminRepository } = require('../../ports/output/IAdminRepository')

class AdminServicesImpl extends IAdminServices {

    constructor(repository) {
        this.repository = repository
    }

    async validateCredentials(user) {
        return await this.repository.validateCredentials(user);
    }

}

module.exports = { AdminServicesImpl }