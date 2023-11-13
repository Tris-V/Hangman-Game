// Array of English words for hangman game
const words = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "strawberry",
  "blueberry",
  "watermelon",
  "pineapple",
  "peach",
  "pear",
  "plum",
  "cherry",
  "grape",
  "carrot",
  "broccoli",
  "cucumber",
  "lettuce",
  "spinach",
  "potato",
  "tomato",
  "onion",
  "garlic",
  "pepper",
  "cabbage",
  "celery",
  "zucchini",
  "asparagus",
  "eggplant",
  "corn",
  "pea",
  "bean",
  "radish",
  "turnip",
  "beet",
  "squash",
  "pumpkin",
  "cantaloupe",
  "clementine",
  "lemon",
  "lime",
  "grapefruit",
  "avocado",
  "olive",
  "pomegranate",
  "raspberry",
  "blackberry",
  "cranberry",
  "apricot",
  "nectarine",
  "fig",
  "date",
  "kiwifruit",
  "papaya",
  "honeydew",
  "persimmon",
  "quince",
  "guava",
  "bluefish",
  "clam",
  "crab",
  "lobster",
  "oyster",
  "salmon",
  "shrimp",
  "snapper",
  "tilapia",
  "trout",
  "tuna",
  "bacon",
  "beef",
  "chicken",
  "duck",
  "ham",
  "lamb",
  "pork",
  "sausage",
  "turkey",
  "anchovy",
  "cod",
  "halibut",
  "herring",
  "mackerel",
  "sardine",
  "swordfish",
  "trout",
  "butter",
  "cheese",
  "cream",
  "milk",
  "yogurt",
  "egg",
  "flour",
  "sugar",
  "salt",
  "pepper",
  "vanilla",
  "cinnamon",
  "ginger",
  "nutmeg",
  "oregano",
  "rosemary",
  "thyme",
  "basil",
  "cilantro",
  "mint",
  "parsley",
  "coriander",
  "cumin",
  "paprika",
  "saffron",
  "mustard",
  "ketchup",
  "mayonnaise",
  "vinegar",
  "soy",
  "sauce",
  "olive",
  "oil",
  "honey",
  "maple",
  "syrup",
  "molasses",
  "mustard",
  "ketchup",
  "mayonnaise",
  "vinegar",
  "soy",
  "sauce",
  "olive",
  "oil",
  "honey",
  "maple",
  "syrup",
  "molasses",
  "pizza",
  "pasta",
  "burger",
  "sandwich",
  "sushi",
  "burrito",
  "taco",
  "quesadilla",
  "noodles",
  "ramen",
  "risotto",
  "pancake",
  "waffle",
  "crepe",
  "lasagna",
  "gyro",
  "falafel",
  "samosa",
  "curry",
  "chowder",
  "stirfry",
  "omelette",
  "quiche",
  "muffin",
  "croissant",
  "bagel",
  "frittata",
  "enchilada",
  "goulash",
  "casserole",
  "fajita",
  "meatball",
  "fondue",
  "tempura",
  "paella",
  "kabob",
  "sashimi",
  "padthai",
  "dimsum",
  "cobbler",
  "tiramisu",
  "mousse",
  "cannoli",
];

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export { randomWord };
