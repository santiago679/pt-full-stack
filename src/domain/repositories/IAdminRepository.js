class IAdminRepository {

    async validateCredentials(admin) {
        throw new Error('Method "validateCredentials" must be implemented');
    }
}

module.exports = IAdminRepository;
