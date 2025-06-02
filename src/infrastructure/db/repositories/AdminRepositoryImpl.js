const { Admin } = require('../models/admin')
const { IAdminRepository } = require('../../../ports/output/IAdminRepository')
const { comparePassword } = require('../../../../shared/utils/util');
const { ValidationException } = require('../../../../shared/exceptions/ValidationException');

class AdminRepositoryImpl extends IAdminRepository {

    async validateCredentials(user) {

        try {
            const userInDatabase = await Admin.findOne({ where: {email: user.email} })
            const validUser = await comparePassword(user.password, userInDatabase.password);

            if(!validUser) {
                throw new ValidationException();
            }
            return true
            
        } catch (error) {
            throw new Error('Error getting admin in database' + error.message)
        }
    }
}

module.exports = { AdminRepositoryImpl }