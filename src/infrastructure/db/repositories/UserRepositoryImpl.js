const UserModel = require('../models/user');
const { User } = require('../../../domain/entities/User')
const { ICommonRepository } = require('../../../domain/ISecondary/ICommonRepository')
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
      const found = await UserModel.findOne({ where: {dni: numDni} });
      return found ? new User(found) : null
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
      const created = await UserModel.create(user)
      return new User(created)
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
      const updated = UserModel.update(user, { where: {dni: user.dni} });
      return new User(updated) 
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

module.exports = { UserRepositoryImpl };