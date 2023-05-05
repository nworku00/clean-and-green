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
    await queryInterface.bulkInsert('Outdoor', [
      {
        name: "Neem Oil Pesticide",
        ingredients: [
          "2 tablespoons of Neem oil",
          "1 teaspoon of liquid dish soap",
          "1 quart of water",
          "Instructions for use: Spray the pesticide directly onto the affected plants, making sure to cover all parts of the plant. Repeat the application every 7-14 days until the pests are gone. Avoid spraying the pesticide during the heat of the day, as this can cause the leaves to burn."
        ],
        recipe: "1. Mix the Neem oil and liquid dish soap together in a small bowl.\n2. Add the mixture to a quart-sized spray bottle filled with water.\n3. Shake well to combine all the ingredients.\n4. Your pesticide spray is now ready to use.",
        image: ""
      },
    
    
    {
      name: "Garlic and chili pepper spray",
      ingredients: [
        "1 head of garlic",
        "2-3 hot chili peppers",
        "1 quart of water",
        "1 tablespoon of liquid dish soap",
      ], 
      recipe: "Peel and crush the garlic and chop the chili peppers.\nAdd the garlic and chili peppers to a quart-sized jar and fill with water.\nLet the mixture steep for 24 hours.\nStrain the mixture and add the liquid dish soap.\nPour the mixture into a spray bottle.\nInstructions for use:\n1. Spray the pesticide directly onto the affected plants, making sure to cover all parts of the plant.\n2. Repeat the application every 7-14 days until the pests are gone.\n3. Avoid spraying the pesticide during the heat of the day, as this can cause the leaves to burn.",
      image: ""
    },
    
      {
      name: "Vegetable Oil Sray", 
      ingredients: [
        "2 tablespoons of vegetable oil",
        "1 tablespoon of liquid dish soap",
        "1 quart of water",
      ], 
      recipe: "Mix the vegetable oil and liquid dish soap together in a small bowl.\nAdd the mixture to a quart-sized spray bottle filled with water.\nShake well to combine all the ingredients.\nYour pesticide spray is now ready to use.\nInstructions for use:\n1.Spray the pesticide directly onto the affected plants, making sure to cover all parts of the plant.\n2.Repeat the application every 7-14 days until the pests are gone.\nAvoid spraying the pesticide during the heat of the day", 
      image: ""}

      {
        name: "Soft-bodies Pest Spray", 
      ingredients: [
        "1 quart of water",
        "1 teaspoon of liquid dish soap",
        "1 teaspoon of baking soda",
        "1 teaspoon of vegetable oil",
      ], recipe: " In a spray bottle, mix the water and liquid dish soap together.\nAdd the baking soda and stir until dissolved.\nAdd the vegetable oil and shake the bottle vigorously to combine all the ingredients.\nYour pesticide spray is now ready to use.\nInstructions for use:\n1. Spray the pesticide directly onto the affected plants, making sure to cover all parts of the plant, including the underside of the leaves.\n2. Repeat the application every few days until the pests are gone.\n3. Avoid spraying the pesticide during the heat of the day, as this can cause the leaves to burn.\n4.Always test a small area of the plant first to make sure it does not have an adverse reaction to the spray.\n5. Store any leftover pesticide in a cool, dry place, out of reach of children and pets.", image: ""
    },
    ]);
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
