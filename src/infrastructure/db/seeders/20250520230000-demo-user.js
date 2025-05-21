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
        phone: "324 2705681",
        email: "camiloa@email.com",
        gender: "Masculino"
      },
      {
        id: crypto.randomUUID(),
        dni: "0123456752",
        fullname: "Martin Zapata",
        age: 36,
        phone: "326 1256982",
        email: "martinz@email.com",
        gender: "Masculino"
      },
      {
        id: crypto.randomUUID(),
        dni: "2568935421",
        fullname: "Mariana Correa",
        age: 41,
        phone: "324 8569814",
        email: "marianac@email.com",
        gender: "Femenino"
      },
      {
        id: crypto.randomUUID(),
        dni: "1987364520",
        fullname: "Santiago Mejía",
        age: 29,
        phone: "321 6789054",
        email: "santiago.mejia@email.com",
        gender: "Masculino"
      },
      {
        id: crypto.randomUUID(),
        dni: "3478190654",
        fullname: "Laura Fernández",
        age: 34,
        phone: "312 6904507",
        email: "laura.fernandez@email.com",
        gender: "Femenino"
      },
      {
        id: crypto.randomUUID(),
        dni: "3978290959",
        fullname: "Daniela Gómez",
        age: 22,
        phone: "312 6108092",
        email: "dani.gomez@email.com",
        gender: "Femenino"
      },
      {
        id: crypto.randomUUID(),
        dni: "1007243176",
        fullname: "Francisco Herrera",
        age: 59,
        phone: "300 2189072",
        email: "pacho.h@email.com",
        gender: "Masculino"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  }
};
