const { User } = require('../models/user');

const getAll = async () => {
  return await User.findAndCountAll();
};

const get = async (numDni) => {
  return await User.findOne({ where: {dni: numDni} });
};

const add = async (user) => {
  return await User.create({
    dni: user.dni,
    fullName: user.fullName,
    age: user.age,
    phone: user.phone,
    email: user.email,
    gender: user.gender
  })
};

const edit = async (numDni, user) => {
  await User.update({
    fullName: user.fullName,
    age: user.age,
    phone: user.phone,
    email: user.email,
    gender: user.gender
  }, 
  { where: {dni: numDni} });

  return await get(numDni);
};

const remove = async (numDni) => {
  return await User.destroy({ where: {dni: numDni} });
};


module.exports = { get, getAll, add, edit, remove };