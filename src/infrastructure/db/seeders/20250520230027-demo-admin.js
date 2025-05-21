'use strict';

const bcrypt = require('bcryptjs')
const crypto = require('node:crypto')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('adminpassword', 10);

    await queryInterface.bulkInsert("Admins" , [
    {
      id: crypto.randomUUID(),
      fullName: "Carlos Patiño",
      email: "admin@admin.com",
      password: hashedPassword
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Admins", null, {})
  }
};