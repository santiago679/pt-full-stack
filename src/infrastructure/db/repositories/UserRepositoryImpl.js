const ICommonRepository = require('../../../domain/repositories/ICommonRepository')
const UserModel = require('../models/user');

class UserRepositoryImpl extends ICommonRepository {

  async getAll() {
    return await UserModel.findAndCountAll();
  };

  async get(numDni) {
    return await UserModel.findOne({ where: {dni: numDni} });
  };

  async add() {
    return await UserModel.create({
      dni: user.dni,
      fullName: user.fullName,
      age: user.age,
      phone: user.phone,
      email: user.email,
      gender: user.gender
    })
  };

  async edit(numDni, user) {
    await UserModel.update({
      fullName: user.fullName,
      age: user.age,
      phone: user.phone,
      email: user.email,
      gender: user.gender
    }, 
    { where: {dni: numDni} });

    return await get(numDni);
  };

  async remove(numDni) {
    return await UserModel.destroy({ where: {dni: numDni} });
  };
  
}

module.exports = UserRepositoryImpl;