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
  }

    
  ];

  export default testRecipes;
  