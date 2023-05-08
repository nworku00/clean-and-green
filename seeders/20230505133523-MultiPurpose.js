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
        await queryInterface.bulkInsert("MultiPurposes", [
            {
                name: "All-Purpose Cleaner",
                ingredients: ["1 cup white vinegar", "1 cup water", "10-15 drops of essential oil of your choice for pleasant scent (optional)"],
                recipe: "1. Measure out all ingredients 2.Mix all the ingredients in a spray bottle and shake well. 3. Use it to clean countertops, sinks, floors, and more.",
                image:"",
            },
            {
                name: "Glass Cleaner",
                ingredients: ["1 cup water", "1/4 cup white vinegar","1/4 cup rubbing alcohol"],
                recipe: "Measure out all ingredients. Mix all the ingredients in a spray bottle and shake well. Use it to clean windows, mirrors, and other glass surfaces.",
                image:"",
            },
            {
                name: "Floor Cleaner",
                ingredients: ["1 gallon of warm / hot water","1/4 cup white vinegar","2-3 drops of essential oil of your choice for pleasant scent (optional)"],
                recipe: "1. Measure out all ingredients. 2. Mix all the ingredients in a bucket and use a mop or cloth to clean the floors, baseboards, etc.",
                image:"",
            },
            {
                name: "Bathroom Cleaner",
                ingredients: ["1/2 cup baking soda","1/4 cup liquid castile soap", "10-15 drops of essential oil (of your choice for pleasant scent (optional)","1/4 cup white vinegar","Water"
                ],
                recipe: "1.Measure out your ingredients. 2.Mix the baking soda, castile soap, and essential oil in a bowl. 3.Add enough water to create a paste. 4.Apply the paste to the surfaces in your bathroom and scrub with a sponge. 5.Rinse with water, then spray white vinegar and wipe clean.",
                image:"",
            },
            {
                name: "Drain Cleaner",
                ingredients: ["1/2 cup baking soda", "1/2 cup white vinegar","1 cup boiling water"],
                recipe: "1.Pour the baking soda down the drain, followed by the white vinegar. 2.Cover the drain with a cloth for a few minutes. 3.Pour boiling water down the drain to flush it out.",
                image:"",
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
