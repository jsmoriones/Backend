'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('publicaciones', [
      {
        titulo: "Publicacion 1",
        descripcion: "Publicacion1Publicacion1Publicacion1Publicacion1Publicacion1Publicacion1Publicacion1Publicacion1Publicacion1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Publicacion 2",
        descripcion: "Publicacion2Publicacion2Publicacion2Publicacion2Publicacion2Publicacion2Publicacion2Publicacion2Publicacion2Publicacion2Publicacion2Publicacion2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: "Publicacion 3",
        descripcion: "Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3Publicacion3",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("publicaciones", null, {})
  }
};
