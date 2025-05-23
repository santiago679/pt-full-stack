// Este archivo define el contrato del repositorio
class ICommonRepository {

    async getAll() {
        throw new Error('Method "getAll" must be implemented');
    }

    async get(id) {
        throw new Error('Method "get" must be implemented');
    }

    async add(user) {
        throw new Error('Method "add" must be implemented');
    }

    async edit(id, user) {
        throw new Error('Method "edit" must be implemented');
    }

    async remove(id) {
        throw new Error('Method "remove" must be implemented');
    }
}

module.exports = ICommonRepository;
