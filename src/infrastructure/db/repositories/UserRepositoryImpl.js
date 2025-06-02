const { User } = require('../models');
const { UserEntity } = require('../../../domain/entities/UserEntity')
const { ICommonRepository } = require('../../../ports/output/ICommonRepository')
const { DuplicateUserException } = require('../../../../shared/exceptions/DuplicateUserException');

class UserRepositoryImpl extends ICommonRepository {

  async getAll() {
    try {
      return await User.findAndCountAll();
    }
    catch(error){
      throw new Error('Error getting all users in database:' + error.message)
    }
  };

  async get(numDni) {
    try {
      const found = await User.findOne({ where: {dni: numDni} });
      return found ? new UserEntity(found) : null
    } 
    catch (error) {
      throw new Error('Error getting a user in database:' + error.message)
    }
  };

  async add(user) {
    try {
      const existeUsuario = await User.findOne({ where: {dni: user.dni} });

      if(existeUsuario) {
        throw new DuplicateUserException(); 
      }
      const created = await User.create(user)
      return new UserEntity(created)
    }
    catch (error) {
      throw new Error('Error adding user in database:' + error.message)
    }
  };

  async edit(user) {
    try {
      const existeUsuario = await User.findOne({ where: {dni: user.dni} });

      if(existeUsuario == null) {
        throw new Error("User not found")
      }
      const updated = User.update(user, { where: {dni: user.dni} });
      return new UserEntity(updated) 
    } 
    catch (error) {
      throw new Error("Error editing user in database" + error.message)
    }
  };

  async remove(numDni) {
    try {
      const existeUsuario = await User.findOne({ where: {dni: numDni} });

      if(existeUsuario == null) {
        throw new Error("User not found")
      }
      return await User.destroy({ where: {dni: numDni} });
    } 
    catch (error) {
      throw new Error("Error deleting user in database" + error.message)
    }
  };
}

module.exports = { UserRepositoryImpl };