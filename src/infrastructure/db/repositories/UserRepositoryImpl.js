const ICommonRepository = require('../../../domain/repositories/ICommonRepository')
const UserModel = require('../models/user');
const { DuplicateUserException } = require('../../../../shared/exceptions/DuplicateUserException');

class UserRepositoryImpl extends ICommonRepository {

  async getAll() {
    try {
      return await UserModel.findAndCountAll();
    }
    catch(error){
      throw new Error('Error getting all users in database:' + error.message)
    }
  };

  async get(numDni) {
    try {
      return await UserModel.findOne({ where: {dni: numDni} });
    } 
    catch (error) {
      throw new Error('Error getting a user in database:' + error.message)
    }
  };

  async add(user) {
    try {
      const existeUsuario = await UserModel.findOne({ where: {dni: user.dni} });

      if(existeUsuario) {
        throw new DuplicateUserException(); 
      }
      return await UserModel.create(user)
    }
    catch (error) {
      throw new Error('Error adding user in database:' + error.message)
    }
  };

  async edit(user) {
    try {
      const existeUsuario = await UserModel.findOne({ where: {dni: user.dni} });

      if(existeUsuario == null) {
        throw new Error("User not found")
      }
      return await UserModel.update(user, { where: {dni: user.dni} });
    } 
    catch (error) {
      throw new Error("Error editing user in database" + error.message)
    }
  };

  async remove(numDni) {
    try {
      const existeUsuario = await UserModel.findOne({ where: {dni: numDni} });

      if(existeUsuario == null) {
        throw new Error("User not found")
      }
      return await UserModel.destroy({ where: {dni: numDni} });
    } 
    catch (error) {
      throw new Error("Error deleting user in database" + error.message)
    }
  };
}

module.exports = UserRepositoryImpl;