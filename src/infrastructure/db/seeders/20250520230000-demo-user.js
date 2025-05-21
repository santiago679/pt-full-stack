'use strict';

const crypto = require('node:crypto')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users",[
      {
        id: crypto.randomUUID(),
        dni: "0123456789",
        fullname: "Camilo Arboleda",
        age: 26,
        phone: 324270568,
        email: "example@email.com",
        gender: "Masculino"
      },
      {
        id: crypto.randomUUID(),
        dni: "0123456752",
        fullname: "Martin Zapata",
        age: 36,
        phone: 26125698,
        email: "example2@email.com",
        gender: "Masculino"
      },
      {
        id: crypto.randomUUID(),
        dni: "2568935421",
        fullname: "Mariana Correa",
        age: 41,
        phone: 32485698,
        email: "example3@email.com",
        gender: "Femenino"
      },
      {
        id: crypto.randomUUID(),
        dni: "1987364520",
        fullname: "Santiago Mejía",
        age: 29,
        phone: 32167890,
        email: "santiago.mejia@email.com",
        gender: "Masculino"
      },
      {
        id: crypto.randomUUID(),
        dni: "3478190654",
        fullname: "Laura Fernández",
        age: 34,
        phone: 312690450,
        email: "laura.fernandez@email.com",
        gender: "Femenino"
      }

    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null,{})
  }
};
