# Healthy Household API
API for healthy household alternatives to chemical cleaners,detergents,and lotions.

## Build and Run command

Build:
```
npm install
```

run dev environment :
```
npm run dev
```

run production environment
```
npm start
```
## /multipurpose
returns multipurpose cleaners
example response:
```
{
    "id": 1,
    "name": "All-Purpose Cleaner",
    "ingredients": [
      "1 cup white vinegar",
      "1 cup water",
      "10-15 drops of essential oil of your choice for pleasant scent (optional)"
    ],
    "recipe": "1. Measure out all ingredients 2.Mix all the ingredients in a spray bottle and shake well. 3. Use it to clean countertops, sinks, floors, and more.",
    "image": "",
    "createdAt": null,
    "updatedAt": null
  }
```

## /detergent
returns laundry and dish detergents
example response:
```
{
    "id": 1,
    "name": "Natural Laundry Detergent Powder",
    "ingredients": [
      "1 cup baking soda",
      "1 cup washing soda",
      "1 cup grated bar soap (use a natural soap like Castile soap)",
      "Optional: 10-15 drops of essential oil of your choice (e.g. lavender, lemon, tea tree"
    ],
    "recipe": "Estimated time to make: 10-15 minutes Shelf life: 6 months to a year Best way to store: Store in an airtight container in a cool, dry place away from moisture.Instructions: 1. Combine all the ingredients in a large mixing bowl. 2. Mix well until everything is evenly distributed. 3. Store the mixture in an airtight container.4. To use, add 1-2 tablespoons of the mixture to your washing machine, depending on the size of your load.",
    "image": "",
    "createdAt": null,
    "updatedAt": null
  }
```

## /topical
returns topical body use items
example response:
```
{
    "id": 1,
    "name": "Body Scrub:",
    "ingredients": [
      "1/2 cup brown sugar",
      "1/2 cup coconut oil",
      "1/2 teaspoon vanilla extract"
    ],
    "recipe": "Mix all ingredients together in a bowl. Use in the shower by applying to wet skin and gently massaging in a circular motion. Rinse off with water.",
    "image": "",
    "createdAt": null,
    "updatedAt": null
  }
```
## /outdoor
returns pesticides and bug repellants
example response:
```
{
    "id": 1,
    "name": "Neem Oil Pesticide",
    "ingredients": [
      "2 tablespoons of Neem oil",
      "1 teaspoon of liquid dish soap",
      "1 quart of water"
    ],
    "recipe": "1. Mix the Neem oil and liquid dish soap together in a small bowl.2. Add the mixture to a quart-sized spray bottle filled with water.3. Shake well to combine all the ingredients.4. Your pesticide spray is now ready to use. Instructions for use: Spray the pesticide directly onto the affected plants, making sure to cover all parts of the plant. Repeat the application every 7-14 days until the pests are gone. Avoid spraying the pesticide during the heat of the day, as this can cause the leaves to burn.",
    "image": "",
    "createdAt": null,
    "updatedAt": null
  }
```

## /search
returns all items in API

## /search/:query
returns all items where name includes search query
example response for /search/spray 
```
{
    "id": 2,
    "name": "Garlic and chili pepper spray",
    "ingredients": [
      "1 head of garlic",
      "2-3 hot chili peppers",
      "1 quart of water",
      "1 tablespoon of liquid dish soap"
    ],
    "recipe": "Peel and crush the garlic and chop the chili peppers.Add the garlic and chili peppers to a quart-sized jar and fill with water.Let the mixture steep for 24 hours.Strain the mixture and add the liquid dish soap.Pour the mixture into a spray bottle. Instructions for use:1. Spray the pesticide directly onto the affected plants, making sure to cover all parts of the plant.2. Repeat the application every 7-14 days until the pests are gone.3. Avoid spraying the pesticide during the heat of the day, as this can cause the leaves to burn.",
    "image": "",
    "createdAt": null,
    "updatedAt": null
  }
```
