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
    await queryInterface.bulkInsert("Detergents", [
        {
            name: "Natural Laundry Detergent Powder",
            ingredients: ["1 cup baking soda", "1 cup washing soda", "1 cup grated bar soap (use a natural soap like Castile soap)", "Optional: 10-15 drops of essential oil of your choice (e.g. lavender, lemon, tea tree"],
            recipe: "Estimated time to make: 10-15 minutes Shelf life: 6 months to a year Best way to store: Store in an airtight container in a cool, dry place away from moisture.Instructions: 1. Combine all the ingredients in a large mixing bowl. 2. Mix well until everything is evenly distributed. 3. Store the mixture in an airtight container.4. To use, add 1-2 tablespoons of the mixture to your washing machine, depending on the size of your load.",
            image: ""
        },
        {
            name: "Natural Dish Detergent Dry",
            ingredients: ["1 cup washing soda", "1 cup borax", "1/2 cup kosher salt", "1/2 cup citric acid", "Optional: 10-15 drops of essential oil of your choice (e.g. lemon, orange, peppermint)"],
            recipe: "1. Combine all the dry ingredients in a mixing bowl. 2. Mix well until everything is evenly distributed. 3. If using essential oils, add them to the mixture and stir well. 4. Store the mixture in an airtight container. 5. To use, add 1-2 tablespoons of the mixture to your dishwasher's detergent compartment.",
            image: ""
        },
        {
            name: " Natural Dish Detergent Liquid",
            ingredients: ["1 cup liquid Castile soap", "1 cup washing soda","1 cup warm water","Optional: 10-15 drops of essential oil of your choice (e.g. lemon, orange, peppermint)"],
            recipe: "Estimated time to make: 10-15 minutes Shelf life: 6 months to a year Best way to store: Store in an airtight container in a cool, dry place away from moisture. Instructions: 1. In a mixing bowl, combine the liquid Castile soap and warm water. 2. Add the washing soda and mix well until everything is combined. 3. If using essential oils, add them to the mixture and stir well. 4. Transfer the mixture to an airtight container. 5. To use, add 1-2 tablespoons of the mixture to your dishwasher’s detergent compartment.",
            image: ""
        },
        {
            name: "Natural Laundry Stain Remover",
            ingredients: ["1/2 cup baking soda", "1/2 cup hydrogen peroxide", "1/2 cup water","Optional: 10-15 drops of essential oil of your choice (e.g. tea tree, lemon)"],
            recipe: "Estimated time to make: 5-10 minutes Shelf life: Use immediately Best way to store: N/A Instructions: 1. In a spray bottle, combine the baking soda, hydrogen peroxide, and water. 2. If using essential oils, add them to the mixture and shake well. 3. To use, spray the stain remover directly onto the stain and let it sit for 10-15 minutes before washing as usual.",
            image: ""
        },
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
