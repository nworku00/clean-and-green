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
    await queryInterface.bulkInsert('Detergent', [
        { name: "Natural Laundry Detergent", ingredients: ["1 cup baking soda","1 cup washing soda","1 cup grated bar soap (use a natural soap like Castile soap)","Optional: 10-15 drops of essential oil of your choice (e.g. lavender, lemon, tea tree"], recipe: "Estimated time to make: 10-15 minutes Shelf life: 6 months to a year Best way to store: Store in an airtight container in a cool, dry place away from moisture.Instructions: 1. Combine all the ingredients in a large mixing bowl. 2. Mix well until everything is evenly distributed. 3. Store the mixture in an airtight container.4. To use, add 1-2 tablespoons of the mixture to your washing machine, depending on the size of your load.", image: "" },
        { name: "Natural Dish Detergent", ingredients: ["1 cup washing soda", "","",""], recipe: "", image: "" },
        { name: "", ingredients: [], recipe: "", image: "" },
        { name: "", ingredients: [], recipe: "", image: "" },
        `   `
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
