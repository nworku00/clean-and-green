'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Topical', [
      {name: "Body Scrub:", ingredients: ["1/2 cup brown sugar",
      "1/2 cup coconut oil", "1/2 teaspoon vanilla extract",], recipe: "Mix all ingredients together in a bowl. Use in the shower by applying to wet skin and gently massaging in a circular motion. Rinse off with water.", image: ""}

      await queryInterface.bulkInsert('MultiPurpose', [
        {name: "", ingredients: [], recipe: "", image: ""}

        
    ])
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
