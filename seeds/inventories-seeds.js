const { Inventory } = require('../models');

const inventoryData = [
  {
    inventory_name: 'apples',
    category_id: 1,
  },
  {
    inventory_name: 'bananas',
    category_id: 1,
  }, 
  {
    inventory_name: 'beets',
    category_id: 1,
  },
  {
    inventory_name: 'blueberries',
    category_id: 1,
  },
  {
    inventory_name: 'broccoli',
    category_id: 1,
  },  
  {
    inventory_name: 'cabbage',
    category_id: 1,
  },  
  {
    inventory_name: 'cantaloupe',
    category_id: 1,
  },
  {
    inventory_name: 'carrots',
    category_id: 1,
  },
  {
    inventory_name: 'cauliflower',
    category_id: 1,
  },
  {
    inventory_name: 'cherries',
    category_id: 1,
  },
  {
    inventory_name: 'corn',
    category_id: 1,
  },
  {
    inventory_name: 'garlic',
    category_id: 1,
  },
  {
    inventory_name: 'grapes',
    category_id: 1,
  },
  {
    inventory_name: 'green beans',
    category_id: 1,
  },
  {
    inventory_name: 'green onions',
    category_id: 1,
  },
  {
    inventory_name: 'lemons',
    category_id: 1,
  },
  {
    inventory_name: 'lettuce',
    category_id: 1,
  }, 
  {
    inventory_name: 'limes',
    category_id: 1,
  },
  {
    inventory_name: 'mangoes',
    category_id: 1,
  },  
  {
    inventory_name: 'nectarines',
    category_id: 1,
  },
  {
    inventory_name: 'onions',
    category_id: 1,
  }, 
  {
    inventory_name: 'oranges',
    category_id: 1,
  },
  {
    inventory_name: 'pears',
    category_id: 1,
  },
  {
    inventory_name: 'plantains',
    category_id: 1,
  },
  {
    inventory_name: 'potatoes',
    category_id: 1,
  },
  {
    inventory_name: 'raspberries',
    category_id: 1,
  },
  {
    inventory_name: 'shallots',
    category_id: 1,
  },
  {
    inventory_name: 'spinach',
    category_id: 1,
  }, 
  {
    inventory_name: 'squash',
    category_id: 1,
  },
  {
    inventory_name: 'strawberries',
    category_id: 1,
  },
  {
    inventory_name: 'sweet potatoes',
    category_id: 1,
  },
  {
    inventory_name: 'tomatoes',
    category_id: 1,
  },
  {
    inventory_name: 'zucchini',
    category_id: 1,
  },
  {
    inventory_name: 'yams',
    category_id: 1,
  },
  {
    inventory_name: 'watermelon',
    category_id: 1,
  },
  {
    inventory_name: 'butter',
    category_id: 2,
  },  
  {
    inventory_name: 'buttermilk',
    category_id: 2,
  },
  {
    inventory_name: 'cheese',
    category_id: 2,
  }, 
  {
    inventory_name: 'coffee creamer',
    category_id: 2,
  },
  {
    inventory_name: 'cottage cheese',
    category_id: 2,
  },
  {
    inventory_name: 'cream cheese',
    category_id: 2,
  },
  {
    inventory_name: 'cream',
    category_id: 2,
  },
  {
    inventory_name: 'eggs',
    category_id: 2,
  },  
  {
    inventory_name: 'half and half',
    category_id: 2,
  },  
  {
    inventory_name: 'margarine',
    category_id: 2,
  },
  {
    inventory_name: 'milk',
    category_id: 2,
  },
  {
    inventory_name: 'sour cream',
    category_id: 2,
  },   {
    inventory_name: 'yogurt',
    category_id: 2,
  }, 
  {
    inventory_name: 'bacon',
    category_id: 3,
  },
  {
    inventory_name: 'beef',
    category_id: 3,
  },
  {
    inventory_name: 'beef (ground)',
    category_id: 3,
  },
  {
    inventory_name: 'chicken',
    category_id: 3,
  },
  {
    inventory_name: 'chicken (ground)',
    category_id: 3,
  },
  {
    inventory_name: 'crab',
    category_id: 3,
  },
  {
    inventory_name: 'fish',
    category_id: 3,
  }, 
  {
    inventory_name: 'ham',
    category_id: 3,
  }, 
  {
    inventory_name: 'hot dogs',
    category_id: 3,
  },
  {
    inventory_name: 'lamb',
    category_id: 3,
  },
  {
    inventory_name: 'lamb (ground)',
    category_id: 3,
  },
  {
    inventory_name: 'lobster',
    category_id: 3,
  },
  {
    inventory_name: 'meatballs',
    category_id: 3,
  },
  {
    inventory_name: 'pork',
    category_id: 3,
  },
  {
    inventory_name: 'pork (ground)',
    category_id: 3,
  },
  {
    inventory_name: 'salmon',
    category_id: 3,
  },
  {
    inventory_name: 'sausages',
    category_id: 3,
  },
  {
    inventory_name: 'shrimp',
    category_id: 3,
  },
  {
    inventory_name: 'tempeh',
    category_id: 3,
  },
  {
    inventory_name: 'tofu',
    category_id: 3,
  },
  {
    inventory_name: 'turkey',
    category_id: 3,
  },  
  {
    inventory_name: 'turkey (ground)',
    category_id: 3,
  }, 
  {
    inventory_name: 'bagels',
    category_id: 4,
  },  
  {
    inventory_name: 'baking powder',
    category_id: 4,
  },  
  {
    inventory_name: 'baking soda',
    category_id: 4,
  },  
  {
    inventory_name: 'barbecue sauce',
    category_id: 4,
  },  
  {
    inventory_name: 'beans',
    category_id: 4,
  },  
  {
    inventory_name: 'bread',
    category_id: 4,
  },  
  {
    inventory_name: 'brown sugar',
    category_id: 4,
  }, 
  {
    inventory_name: 'caramel',
    category_id: 4,
  },  
  {
    inventory_name: 'chickpeas',
    category_id: 4,
  },  
  {
    inventory_name: 'chocolate chips',
    category_id: 4,
  }, 
  {
    inventory_name: 'cookies',
    category_id: 4,
  },  
  {
    inventory_name: 'crackers',
    category_id: 4,
  },  
  {
    inventory_name: 'flour',
    category_id: 4,
  },
  {
    inventory_name: 'jam',
    category_id: 4,
  },    {
    inventory_name: 'jelly',
    category_id: 4,
  },  
  {
    inventory_name: 'ketchup',
    category_id: 4,
  },  
  {
    inventory_name: 'lentils',
    category_id: 4,
  },  
  {
    inventory_name: 'marmalade',
    category_id: 4,
  },  
  {
    inventory_name: 'mayonnaise',
    category_id: 4,
  }, 
  {
    inventory_name: 'muffins',
    category_id: 4,
  },   
  {
    inventory_name: 'nuts',
    category_id: 4,
  },  
  {
    inventory_name: 'olives',
    category_id: 4,
  }, 
  {
    inventory_name: 'pepper',
    category_id: 4,
  }, 
  {
    inventory_name: 'pickles',
    category_id: 4,
  }, 
  {
    inventory_name: 'potato chips',
    category_id: 4,
  },  
  {
    inventory_name: 'powdered sugar',
    category_id: 4,
  }, 
  {
    inventory_name: 'prunes',
    category_id: 4,
  },  
  {
    inventory_name: 'quinoa',
    category_id: 4,
  },  
  {
    inventory_name: 'raisins',
    category_id: 4,
  },  
  {
    inventory_name: 'rice',
    category_id: 4,
  },
  {
    inventory_name: 'salt',
    category_id: 4,
  },  
  {
    inventory_name: 'sugar',
    category_id: 4,
  },  
  {
    inventory_name: 'tortillas',
    category_id: 4,
  },  
  {
    inventory_name: 'tortilla chips',
    category_id: 4,
  },   
  {
    inventory_name: 'berries',
    category_id: 5,
  },  
  {
    inventory_name: 'broccoli',
    category_id: 5,
  },  
  {
    inventory_name: 'chicken tenders',
    category_id: 5,
  },  
  {
    inventory_name: 'french fries',
    category_id: 5,
  },  
  {
    inventory_name: 'hashbrowns',
    category_id: 5,
  },  
  {
    inventory_name: 'ice cream',
    category_id: 5,
  },  
  {
    inventory_name: 'juice concentrate',
    category_id: 5,
  },  
  {
    inventory_name: 'microwave dinner',
    category_id: 5,
  },  
  {
    inventory_name: 'mozzarella sticks',
    category_id: 5,
  },  
  {
    inventory_name: 'peas',
    category_id: 5,
  }, 
  {
    inventory_name: 'pie crust',
    category_id: 5,
  },  
  {
    inventory_name: 'pizza',
    category_id: 5,
  },   
  {
    inventory_name: 'popsicles',
    category_id: 5,
  },  
  {
    inventory_name: 'puff pastry',
    category_id: 5,
  },  
  {
    inventory_name: 'vegetables',
    category_id: 5,
  },  
  {
    inventory_name: 'waffles',
    category_id: 5,
  },  
  {
    inventory_name: 'bandages',
    category_id: 6,
  }, 
  {
    inventory_name: 'batteries',
    category_id: 6,
  },  
  {
    inventory_name: 'bleach',
    category_id: 6,
  }, 
  {
    inventory_name: 'conditioner',
    category_id: 6,
  }, 
  {
    inventory_name: 'deodorant',
    category_id: 6,
  }, 
  {
    inventory_name: 'dish soap',
    category_id: 6,
  }, 
  {
    inventory_name: 'hand soap',
    category_id: 6,
  }, 
  {
    inventory_name: 'laundry detergent',
    category_id: 6,
  }, 
  {
    inventory_name: 'light bulbs',
    category_id: 6,
  }, 
  {
    inventory_name: 'lotion',
    category_id: 6,
  },  
  {
    inventory_name: 'medication',
    category_id: 6,
  }, 
  {
    inventory_name: 'napkins',
    category_id: 6,
  }, 
  {
    inventory_name: 'paper towels',
    category_id: 6,
  },
  {
    inventory_name: 'shampoo',
    category_id: 6,
  }, 
  {
    inventory_name: 'shaving cream',
    category_id: 6,
  }, 
  {
    inventory_name: 'socks',
    category_id: 6,
  }, 
  {
    inventory_name: 'toilet paper',
    category_id: 6,
  },
  {
    inventory_name: 'toothbrush',
    category_id: 6,
  }, 
  {
    inventory_name: 'toothpaste',
    category_id: 6,
  }, 
  {
    inventory_name: 'vitamins',
    category_id: 6,
  }, 
  
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;
