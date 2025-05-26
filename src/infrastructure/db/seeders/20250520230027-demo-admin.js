'use strict';

const { hashPassword } = require('../../../../shared/utils/util')
const crypto = require('node:crypto')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await hashPassword("adminpassword");

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