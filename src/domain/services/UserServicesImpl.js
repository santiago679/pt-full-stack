const { ICommonServices } = require('../../ports/input/ICommonServices')
//const { ICommonRepository } = require('../../ports/output/ICommonRepository')

class UserServicesImpl extends ICommonServices {

    constructor(repository) {
        this.repository = repository
    }

    async getAll() {
        return await this.repository.getAll()
    }

    async get(id) {
        return await this.repository.get(id)
    }
    
    async add(user) {
        return await this.repository.add(user)
    }
    
    async edit(user) {
        return await this.repository.edit(user)
    }
    
    async remove(id) {
        return await this.repository.remove(id)
    }
}

module.exports = { UserServicesImpl }
