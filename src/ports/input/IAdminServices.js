class IAdminServices {

    async validateCredentials(user) {
        throw new Error('Method "validateCredentials" must be implemented');
    }
}

module.exports = { IAdminServices };