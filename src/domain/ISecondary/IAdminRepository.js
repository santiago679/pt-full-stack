class IAdminRepository {

    async validateCredentials(user) {
        throw new Error('Method "validateCredentials" must be implemented');
    }
}

module.exports = { IAdminRepository };