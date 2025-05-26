const { ICommonServices } = require('../IPrimary/ICommonServices')
const { ICommonRepository } = require('../ISecondary/ICommonRepository')

class UserServices extends ICommonServices {

    repository = new ICommonRepository()

    constructor(repository) {
        this.repository = repository
    }

    async getAll() {
        await this.repository.getAll()
    }

    async get(id) {
        await this.repository.get(id)
    }
    
    async add(user) {
        await this.repository.add(user)
    }
    
    async edit(user) {
        await this.repository.edit(user)
    }
    
    async remove(id) {
        await this.repository.remove(id)
    }
}

module.exports = { UserServices }