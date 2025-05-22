const { Admin } = require('../models/admin');

const get = async (mail) => {
  return await Admin.findOne({where: {email: mail}});
};
  
const add = async (admin, hashedPassword) => {
  return await Admin.create({
    fullName: admin.fullName,
    email: admin.email,
    password: hashedPassword,
  })
};
  
module.exports = { get, add };