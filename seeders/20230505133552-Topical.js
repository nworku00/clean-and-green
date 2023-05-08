'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Topicals", [
      {
        name:
          "Body Scrub:", 
          ingredients: ["1/2 cup brown sugar",
            "1/2 cup coconut oil", "1/2 teaspoon vanilla extract",], 
          recipe: "Mix all ingredients together in a bowl. Use in the shower by applying to wet skin and gently massaging in a circular motion. Rinse off with water.", 
          image: ""
      },

      {
        name:
          "Body Lotion", ingredients: [
            "1/2 cup shea butter",
            "1/4 cup coconut oil",
            "1/4 cup olive oil",
            "Optional: a few drops of essential oil for fragrance",
          ],
        recipe:
          "Melt the shea butter and coconut oil in a double boiler over low heat. Once melted, remove from heat and stir in the olive oil and essential oil (if using). Let the mixture cool to room temperature, then transfer to a glass jar or container. Apply as needed to moisturize skin.", image: ""
      },

      {
        name: "Lip Balm", ingredients: [
          "2 tablespoons beeswax",
          "2 tablespoons coconut oil",
          "1 tablespoon shea butter",
          "Optional: a few drops of essential oil for fragrance",
        ],
        recipe: "Time to make: 15 minutes,Shelf life: Up to 1 year. Instructions: Melt the beeswax, coconut oil, and shea butter in a double boiler over low heat. Once melted, remove from heat and stir in the essential oil (if using). Pour the mixture into lip balm containers or small jars and let it cool completely before using.", 
        image: ""
      },

      {
        name: "Body Spray",
        ingredients: [
          "1/2 cup distilled water",
          "1/2 cup witch hazel",
          "Optional: a few drops of essential oil for fragrance",
        ], 
        recipe: "Time to make: 5 minutes,Up to 6 months. Instructions: Mix all ingredients together in a spray bottle. Shake well before using and spray onto skin as needed. When making your own body care products, it’s important to keep in mind that everyone’s skin is different. Test the product on a small area of skin before using to ensure that you don’t have any adverse reactions.",
        image: ""
      },
      

      {
        name: "Body Butter",
        ingredients: [
          "1 cup cocoa butter",
          "1/2 cup coconut oil",
          "1/4 cup olive oil",
          "Optional: a few drops of essential oil for fragrance",
        ],
        recipe: "Mix all ingredients together in a bowl. Using a hand mixer, whip the mixture until it becomes light and fluffy, about 5-10 minutes. Transfer to a clean jar or container with a lid. ShelfLife: Up to 6 months. Instructions: Apply a small amount to your skin and massage until absorbed. Use daily for best results.",
        image: ""
      },
      
      {
        name: "Bath Soak",
        ingredients: [
          "1 cup Epsom salt",
          "1/2 cup baking soda",
          "Optional: a few drops of essential oil for fragrance",
          ], recipe: "Time to make: 5 minutes,Use immediately. Instructions:Mix all ingredients together in a bowl. Add to a warm bath and soak for at least 20 minutes",
          image: ""
      },


      {
        name: "Hair Moisture Mask",
        ingredients: [
          "1 ripe avocado",
          "1 tablespoon olive oil",
          "1 tablespoon honey",

        ], recipe: "Time to make: 5 minutes,Shelf-life: Use immediately,Mash the avocado in a bowl until it’s smooth. Mix in the olive oil and honey until well combined. Apply the mixture to your hair and let it sit for 20-30 minutes before washing out with shampoo.", image: ""
      },

      {
        name: "Facial Toner",
        ingredients: [
          "1/2 cup distilled water",
          "1/2 cup apple cider vinegar",
          "Optional: a few drops of essential oil for fragrance",
        ], recipe: "Time to make: 5 minutes Shelf-life: Up to 6 months,Mix all ingredients together in a spray bottle. Shake well before using and apply to face with a cotton pad.", image: ""
      },

      {
        name: "Foot Soak",
        ingredients: [
          "1/2 cup Epsom salt",
          "1/4 cup baking soda",
          "1/4 cup apple cider vinegar",
          "Optional: a few drops of essential oil for fragrance",
        ], recipe: "Time to make: 5 minutes,Shelf life: Use immediately,Mix all ingredients together in a basin of warm water. Soak feet for at least 15 minutes.",
        image: ""
      },


      {
        name: "Cuticle Oil",
        ingredients: [
          "1 tablespoon olive oil",
          "1 tablespoon coconut oil",
          "1 teaspoon vitamin E oil",
          "Optional: a few drops of essential oil for fragrance",
        ], recipe: "Time to make: 5 minutes. Shelf life: Up to 1 year,Mix all ingredients together in a small bowl. Apply to cuticles and nails using a cotton swab.",
          image: "" 
        },

    ])
        },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
    *
    * Example:
    * await queryInterface.bulkDelete('People', null, {});
    */
  }
};
