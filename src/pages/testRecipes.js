const testRecipes = [
  {
    id: 1, 
    title: "Margherita Pizza",
    ingredients: ["dough", "mozzarella cheese", "tomato sauce", "fresh basil"],
    directions: "Roll out dough, spread tomato sauce, add mozzarella, bake at 450°F (230°C) until crust is golden, top with fresh basil."
  },
  {
    id: 2,
    title: "Chicken Alfredo Pasta",
    ingredients: ["fettuccine pasta", "chicken breast", "Alfredo sauce", "garlic", "Parmesan cheese", "parsley"],
    directions: "Cook pasta, sauté chicken and garlic, mix with Alfredo sauce, top with Parmesan and parsley."
  },
  {
    id: 3,
    title: "Beef Tacos",
    ingredients: ["ground beef", "taco seasoning", "tortillas", "lettuce", "tomato", "cheese", "sour cream", "salsa"],
    directions: "Cook beef with taco seasoning, assemble tacos with toppings in tortillas."
  },
  {
    id: 4,
    title: "Caesar Salad",
    ingredients: ["romaine lettuce", "croutons", "Parmesan cheese", "Caesar dressing", "grilled chicken (optional)"],
    directions: "Toss lettuce with dressing, croutons, and cheese. Add grilled chicken if desired."
  },
  {
    id: 5,
    title: "Grilled Salmon",
    ingredients: ["salmon", "olive oil", "lemon juice", "salt", "pepper", "fresh herbs"],
    directions: "Marinate salmon, grill at medium-high heat (about 400°F/200°C) until cooked through, garnish with fresh herbs and lemon."
  },
  {
    id: 6,
    title: "Vegetable Stir-Fry",
    ingredients: ["mixed vegetables", "chicken", "soy sauce", "sesame oil", "garlic", "ginger"],
    directions: "Sauté tofu or chicken, add veggies, soy sauce, garlic, and ginger."
  },
  {
    id: 7,
    title: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "eggs", "bacon", "Parmesan cheese", "garlic"],
    directions: "Cook spaghetti, sauté bacon and garlic, mix eggs and cheese, combine everything."
  },
  {
    id: 8,
    title: "Chicken Stir-Fry",
    ingredients: ["chicken", "vegetables (bell peppers, broccoli, carrots)", "soy sauce", "garlic", "ginger"],
    directions: "Stir-fry chicken and veggies, add soy sauce, garlic, and ginger, cook until tender."
  },
  {
    id: 9,
    title: "Pancakes",
    ingredients: ["flour", "eggs", "milk", "baking powder", "salt", "sugar", "butter"],
    directions: "Mix dry ingredients, beat eggs and milk, combine, cook on griddle at medium heat until golden."
  },
  {
    id: 10,
    title: "Chocolate Chip Cookies",
    ingredients: ["flour", "butter", "sugar", "brown sugar", "eggs", "vanilla extract", "baking soda", "salt", "chocolate chips"],
    directions: "Cream butter and sugars, add eggs and vanilla, mix dry ingredients, fold in chocolate chips, bake at 350°F (175°C) until golden."
  },
  {
    id: 11,
    title: "Guacamole",
    ingredients: ["avocado", "tomato", "onion", "lime juice", "cilantro", "salt", "pepper"],
    directions: "Mash avocado, mix in chopped tomato, onion, lime juice, cilantro, salt, and pepper."
  },
  {
    id: 12,
    title: "Chicken Curry",
    ingredients: ["chicken", "curry powder", "coconut milk", "onion", "garlic", "ginger", "potatoes", "carrots", "peas"],
    directions: "Brown chicken, sauté onions, garlic, ginger, add curry powder, coconut milk, veggies, simmer at low heat until chicken is cooked and tender."
  },
  {
    id: 13,
    title: "Egg Fried Rice",
    ingredients: ["rice", "eggs", "peas", "carrots", "corn", "soy sauce", "sesame oil", "garlic", "green onions"],
    directions: "Scramble eggs, sauté veggies, add rice, soy sauce, garlic, green onions, cook until heated through."
  },
  {
    id: 14,
    title: "Caprese Salad",
    ingredients: ["tomatoes", "mozzarella cheese", "fresh basil", "balsamic vinegar", "olive oil", "salt", "pepper"],
    directions: "Slice tomatoes and mozzarella, arrange with basil leaves, drizzle with balsamic, olive oil, sprinkle salt and pepper."
  },
  {
    id: 15,
    title: "Lemon Garlic Shrimp Pasta",
    ingredients: ["shrimp", "linguine pasta", "lemon", "garlic", "butter", "Parmesan cheese", "parsley"],
    directions: "Sauté shrimp, garlic in butter, cook pasta, toss with lemon juice, Parmesan, parsley, serve hot."
  },
  {
    id: 16,
    title: "Beef and Broccoli Stir-Fry",
    ingredients: ["beef", "broccoli", "soy sauce", "brown sugar", "garlic", "ginger", "cornstarch"],
    directions: "Marinate beef in soy sauce, brown sugar, garlic, ginger, stir-fry with broccoli, sauce with cornstarch mixture."
  },
  {
    id: 17,
    title: "Ratatouille",
    ingredients: ["eggplant", "zucchini", "bell peppers", "onions", "tomatoes", "garlic", "herbs de Provence", "olive oil"],
    directions: "Sauté onions, garlic, add veggies, tomatoes, herbs, cook until tender, drizzle with olive oil."
  },
  {
    id: 18,
    title: "Mushroom Risotto",
    ingredients: ["Arborio rice", "mushrooms", "vegetable broth", "white wine", "onion", "Parmesan cheese", "butter"],
    directions: "Sauté onion, mushrooms, add rice, deglaze with wine, add broth gradually, finish with Parmesan, butter."
  },
  {
    id: 19,
    title: "Homemade Burgers",
    ingredients: ["ground beef", "buns", "lettuce", "tomato", "onion", "cheese", "pickles", "ketchup", "mustard"],
    directions: "Form patties, grill at medium-high heat (about 375°F/190°C) or cook on stovetop, assemble on buns with toppings, sauces."
  },
  {
    id: 20,
    title: "Veggie Pizza",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "bell peppers", "onions", "mushrooms", "olives", "spinach"],
    directions: "Spread sauce on dough, top with cheese, veggies, bake at 450°F (230°C) until crust is golden and cheese is bubbly."
  },
  {
    id: 21,
    title: "French Toast",
    ingredients: ["bread", "eggs", "milk", "vanilla extract", "cinnamon", "butter", "maple syrup"],
    directions: "Dip bread in egg mixture, cook in butter on griddle or pan at medium heat until golden, serve with maple syrup."
  },
  {
    id: 22,
    title: "Chicken Noodle Soup",
    ingredients: ["chicken", "chicken broth", "carrots", "celery", "onion", "egg noodles", "garlic", "parsley"],
    directions: "Cook chicken in broth, add veggies, noodles, garlic, parsley, simmer at low heat until flavors blend."
  },
  {
    id: 23,
    title: "Tiramisu",
    ingredients: ["ladyfingers", "espresso", "mascarpone cheese", "eggs", "sugar", "cocoa powder"],
    directions: "Dip ladyfingers in espresso, layer with mascarpone mixture, refrigerate, dust with cocoa before serving."
  },
  {
    id: 24,
    title: "Vegetarian Chili",
    ingredients: ["black beans", "kidney beans", "corn", "bell peppers", "onion", "tomatoes", "chili powder", "cumin", "garlic"],
    directions: "Sauté veggies, add beans, tomatoes, spices, simmer at low heat until flavors meld."
  },
  {
    id: 25,
    title: "Spinach and Feta Stuffed Chicken",
    ingredients: ["chicken", "spinach", "feta", "garlic", "olive oil", "salt", "pepper"],
    directions: "Stuff chicken with spinach, feta, garlic, sear in oil, bake at 375°F (190°C) until cooked through."
  },
  {
    id: 26,
    title: "Vegetarian Lasagna",
    ingredients: ["lasagna noodles", "tomato sauce", "ricotta cheese", "spinach", "mozzarella cheese", "Parmesan cheese", "garlic", "onion"],
    directions: "Layer noodles with sauce, ricotta, spinach mixture, repeat, top with mozzarella, Parmesan, bake at 375°F (190°C) for 30-40 minutes or until bubbly."
  },
  {
    id: 27,
    title: "Shrimp Scampi",
    ingredients: ["shrimp", "linguine pasta", "butter", "garlic", "white wine", "lemon juice", "parsley", "red pepper flakes"],
    directions: "Sauté shrimp, garlic in butter, add wine, lemon, parsley, toss with cooked pasta, sprinkle red pepper flakes, cook for 3-4 minutes."
  },
  {
    id: 28,
    title: "BBQ Ribs",
    ingredients: ["pork ribs", "BBQ sauce", "salt", "pepper", "garlic powder", "onion powder", "paprika", "brown sugar"],
    directions: "Rub ribs with spices, bake at 300°F (150°C) for 2 hours, brush with BBQ sauce, grill or broil at 400°F (200°C) for 10-15 minutes until caramelized."
  },
  {
    id: 29,
    title: "Eggplant Parmesan",
    ingredients: ["eggplant", "breadcrumbs", "eggs", "mozzarella cheese", "Parmesan cheese", "tomato sauce", "olive oil"],
    directions: "Coat eggplant slices with egg, breadcrumbs, fry until golden, layer with sauce, cheeses, bake at 375°F (190°C) for 25-30 minutes or until bubbly."
  },
  {
    id: 30,
    title: "Beef Stew",
    ingredients: ["beef ", "potatoes", "carrots", "onion", "garlic", "beef broth", "tomato paste", "flour", "thyme", "bay leaves"],
    directions: "Brown beef, sauté veggies, add broth, tomato paste, thyme, bay leaves, simmer for 2 hours or until beef is tender."
  },
  {
    id: 31,
    title: "Tacos al Pastor",
    ingredients: ["pork ", "pineapple", "onion", "garlic", "chili powder", "cumin", "oregano", "tortillas", "cilantro", "lime"],
    directions: "Marinate pork with spices, pineapple, garlic, onion, roast at 375°F (190°C) for 1.5-2 hours, serve in tortillas with cilantro, lime."
  },
  {
    id: 32,
    title: "Lemon Chicken Piccata",
    ingredients: ["chicken ", "flour", "lemon", "butter", "olive oil", "chicken broth", "capers", "parsley"],
    directions: "Coat chicken in flour, sauté in butter, oil, add broth, lemon, capers, simmer for 10-15 minutes, garnish with parsley."
  },
  {
    id: 33,
    title: "Stuffed Bell Peppers",
    ingredients: ["bell peppers", "ground beef", "rice", "onion", "tomato sauce", "cheese", "garlic", "Italian seasoning"],
    directions: "Cook beef, rice, onion, seasoning, stuff peppers, top with sauce, cheese, bake at 375°F (190°C) for 30-35 minutes or until peppers are tender."
  },
  {
    id: 34,
    title: "Chicken Enchiladas",
    ingredients: ["chicken breasts", "tortillas", "enchilada sauce", "cheese", "onion", "garlic", "chili powder", "cumin"],
    directions: "Cook chicken, onion, garlic with spices, roll in tortillas, top with sauce, cheese, bake at 350°F (175°C) for 20-25 minutes until bubbly."
  },
  {
    id: 35,
    title: "Beef Wellington",
    ingredients: ["beef", "puff pastry", "mushrooms", "onion", "garlic", "Dijon mustard", "prosciutto", "egg"],
    directions: "Sear beef, mushrooms, onion, garlic, spread mustard, wrap in prosciutto, puff pastry, bake at 425°F (220°C) for 35-40 minutes or until golden."
  },
  {
    id: 36,
    title: "Coq au Vin",
    ingredients: ["chicken ", "bacon", "mushrooms", "onion", "carrots", "red wine", "chicken broth", "garlic", "thyme", "flour"],
    directions: "Sauté chicken, bacon, veggies, add wine, broth, garlic, thyme, simmer for 45-50 minutes or until chicken is cooked and sauce thickens."
  },
  {
    id: 37,
    title: "Sushi Rolls",
    ingredients: ["sushi rice", "nori seaweed", "salmon", "tuna", "avocado", "cucumber", "soy sauce", "wasabi", "pickled ginger"],
    directions: "Spread rice on nori, add fish, veggies, roll tightly, slice, serve with soy sauce, wasabi, ginger."
  },
  {
    id: 38,
    title: "Vegetable Curry",
    ingredients: ["potatoes", "carrots", "cauliflower", "onion", "garlic", "ginger", "coconut milk", "curry powder", "chili peppers", "cilantro"],
    directions: "Sauté veggies, garlic, ginger, add coconut milk, curry, chili, simmer for 20-25 minutes or until veggies are tender, garnish with cilantro."
  },
  {
    id: 39,
    title: "Lobster Tail",
    ingredients: ["lobster tails", "butter", "lemon", "garlic", "parsley", "salt", "pepper"],
    directions: "Split tails, brush with butter, lemon, garlic, parsley, bake at 400°F (200°C) for 10-12 minutes or until meat is opaque and tender."
  },
  {
    id: 40,
    title: "Fettuccine Alfredo",
    ingredients: ["fettuccine", "heavy cream", "butter", "Parmesan cheese", "garlic", "parsley"],
    directions: "Cook pasta, heat cream, butter, garlic, cheese, toss with pasta, garnish with parsley."
  },
  {
    id: 41,
    title: "Pad Thai",
    ingredients: ["rice noodles", "shrimp", "tofu", "eggs", "bean sprouts", "green onions", "peanuts", "fish sauce", "lime", "sugar"],
    directions: "Cook noodles, stir-fry shrimp, tofu, eggs, veggies, add sauce, noodles, garnish with peanuts, lime, cook for 3-4 minutes."
  },
  {
    id: 42,
    title: "Pulled Pork Sandwiches",
    ingredients: ["pork ", "BBQ sauce", "buns", "coleslaw", "pickles"],
    directions: "Slow-cook pork with BBQ sauce for 8 hours on low, shred, serve on buns with coleslaw, pickles."
  },
  {
    id: 43,
    title: "Mango Chicken Salad",
    ingredients: ["chicken ", "mango", "mixed greens", "red onion", "avocado", "pecans", "balsamic vinaigrette"],
    directions: "Grill chicken for 5-6 minutes per side, slice, toss with greens, mango, onion, avocado, pecans, dressing."
  },
  {
    id: 44,
    title: "Risotto with Asparagus",
    ingredients: ["Arborio rice", "asparagus", "white wine", "shallots", "Parmesan cheese", "chicken broth", "butter"],
    directions: "Sauté shallots, asparagus, rice, deglaze with wine, add broth, finish with Parmesan, butter, cook for 20-25 minutes."
  },
  {
    id: 45,
    title: "Greek Salad",
    ingredients: ["lettuce", "tomatoes", "cucumber", "red onion", "Kalamata olives", "feta cheese", "oregano", "olive oil", "red wine vinegar"],
    directions: "Toss lettuce, tomatoes, cucumber, onion, olives, feta, oregano, oil, vinegar."
  },
  {
    id: 46,
    title: "Pesto Pasta",
    ingredients: ["pasta", "basil", "pine nuts", "Parmesan cheese", "garlic", "olive oil"],
    directions: "Blend basil, nuts, cheese, garlic, oil, toss with cooked pasta, cook for 2-3 minutes."
  },
  {
    id: 47,
    title: "Quinoa Salad",
    ingredients: ["quinoa", "cucumber", "tomato", "red onion", "bell pepper", "feta cheese", "olive oil", "lemon juice", "salt", "pepper"],
    directions: "Cook quinoa, toss with veggies, cheese, oil, lemon, salt, pepper."
  },
  {
    id: 48,
    title: "Butternut Squash Soup",
    ingredients: ["butternut squash", "onion", "carrots", "apple", "vegetable broth", "coconut milk", "curry powder", "nutmeg"],
    directions: "Roast squash at 400°F (200°C) for 30-35 minutes, sauté onion, carrots, apple, add broth, coconut milk, spices, blend until smooth."
  },
  {
    id: 49,
    title: "Lentil Soup",
    ingredients: ["lentils", "carrots", "celery", "onion", "garlic", "tomatoes", "vegetable broth", "cumin", "coriander", "bay leaf"],
    directions: "Sauté veggies, lentils, spices, add broth, tomatoes, simmer for 30-35 minutes or until lentils are tender."
  },
  {
    id: 50,
    title: "Bruschetta",
    ingredients: ["baguette", "tomatoes", "garlic", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
    directions: "Slice baguette, toast at 400°F (200°C) for 5-7 minutes, top with diced tomatoes, garlic, basil, drizzle with oil, vinegar, season."
  }

    
  ];

  export default testRecipes;
  