const data = {
  swagger: "2.0",
  info: {
    version: "2.8",
    title: "Recipe Search API",
    description: "",
  },
  schemes: ["https"],
  host: "api.edamam.com",
  basePath: "/",
  tags: [
    {
      name: "Recipe Search",
    },
    {
      name: "Specific Recipe Info",
    },
  ],
  paths: {
    "/api/recipes/v2": {
      get: {
        tags: ["Recipe Search"],
        summary: "Search for a Recipe",
        description:
          "This endpoint returns a list of recipes matching the provided criteria. Get started by placing your search query in the \"q\" parameter, fill in your 3scale credentials, and press the \"Try it out!\" button at the bottom. Additionaly, refine your search by using the optional parameters to specify what you are looking for.\n \n <b>Note:</b>\n When mentioned, 'floating point values' refers to values such as '50.0', '50.', '0.5', and '.5'. \n When speaking of ranges, the API accepts values such as 1.0+, 1.0-50.0, or 50.0, for floating point ranges.\n \n The parameters with <b>(required)</b> in their value box are the required parameters and must be defined as part of a request, all others can be left blank if you do not wish to define them.\n \n <b>Access Point:</b> https://api.edamam.com/api/recipes/v2",
        parameters: [
          {
            name: "type",
            in: "query",
            description: "Type of recipes to search for.",
            required: true,
            type: "string",
            enum: ["public", "user", "any"],
          },
          {
            name: "beta",
            in: "query",
            description: "Allow beta features in the request and response",
            type: "boolean",
          },
          {
            name: "q",
            in: "query",
            description:
              'Query text, for example "chicken". <br> <b>REQUIRED</b> if no other parameter is specified. <b>NOT REQUIRED</b> if any other parameter (other than application credentials) is specified.',
            type: "string",
          },
          {
            name: "app_id",
            in: "query",
            "x-data-threescale-name": "app_ids",
            description:
              "The application ID, obtained from the account dashboard, https://developer.edamam.com/admin/applications.",
            required: true,
            type: "string",
          },
          {
            name: "app_key",
            in: "query",
            "x-data-threescale-name": "app_keys",
            description:
              "The application key, obtained from the account dashboard, https://developer.edamam.com/admin/applications.",
            required: true,
            type: "string",
          },
          {
            name: "Edamam-Account-User",
            description:
              "ID of the account user. Should be used *only* if the account is configured for active user tracking.",
            in: "header",
            type: "string",
          },
          {
            name: "ingr",
            in: "query",
            description:
              "Filter by number of ingredients (MIN+, MIN-MAX, MAX), where MIN and MAX are integer numbers. Example: ingr=5-8",
            pattern:
              "(?:[+-]?\\d+)|(?:(?:[+-]?\\d+)-(?:[+-]?\\d+))|(?:(?:[+-]?\\d+)[+-])",
            type: "string",
          },
          {
            name: "diet",
            in: "query",
            description:
              "Diet label. You can select multiple labels by holding shift and left-clicking all the labels needed.",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: [
                "balanced",
                "high-fiber",
                "high-protein",
                "low-carb",
                "low-fat",
                "low-sodium",
              ],
            },
          },
          {
            name: "health",
            in: "query",
            description:
              "Health label. You can select multiple labels by holding shift and left-clicking all the labels needed.",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: [
                "alcohol-cocktail",
                "alcohol-free",
                "celery-free",
                "crustacean-free",
                "dairy-free",
                "DASH",
                "egg-free",
                "fish-free",
                "fodmap-free",
                "gluten-free",
                "immuno-supportive",
                "keto-friendly",
                "kidney-friendly",
                "kosher",
                "low-fat-abs",
                "low-potassium",
                "low-sugar",
                "lupine-free",
                "Mediterranean",
                "mollusk-free",
                "mustard-free",
                "no-oil-added",
                "paleo",
                "peanut-free",
                "pescatarian",
                "pork-free",
                "red-meat-free",
                "sesame-free",
                "shellfish-free",
                "soy-free",
                "sugar-conscious",
                "sulfite-free",
                "tree-nut-free",
                "vegan",
                "vegetarian",
                "wheat-free",
              ],
            },
          },
          {
            name: "cuisineType",
            in: "query",
            description: "The type of cuisine of the recipe",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: [
                "American",
                "Asian",
                "British",
                "Caribbean",
                "Central Europe",
                "Chinese",
                "Eastern Europe",
                "French",
                "Indian",
                "Italian",
                "Japanese",
                "Kosher",
                "Mediterranean",
                "Mexican",
                "Middle Eastern",
                "Nordic",
                "South American",
                "South East Asian",
              ],
            },
          },
          {
            name: "mealType",
            in: "query",
            description: "The type of meal a recipe belongs to",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"],
            },
          },
          {
            name: "dishType",
            in: "query",
            description: "The dish type a recipe belongs to",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: [
                "Biscuits and cookies",
                "Bread",
                "Cereals",
                "Condiments and sauces",
                "Desserts",
                "Drinks",
                "Main course",
                "Pancake",
                "Preps",
                "Preserve",
                "Salad",
                "Sandwiches",
                "Side dish",
                "Soup",
                "Starter",
                "Sweets",
              ],
            },
          },
          {
            name: "calories",
            in: "query",
            description:
              "The format is calories=RANGE where RANGE is in one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. The + symbol needs to be properly encoded. Examples: “calories=100-300” will return all recipes with which have between 100 and 300 kcal per serving.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "time",
            in: "query",
            description:
              "Time range for the total cooking and prep time for a recipe . The format is time=RANGE where RANGE is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative integer numbers. The + symbol needs to be properly encoded. Examples: “time=1%2B” will return all recipes with available total time greater then 1 minute",
            pattern:
              "(?:[+-]?\\d+)|(?:(?:[+-]?\\d+)-(?:[+-]?\\d+))|(?:(?:[+-]?\\d+)[+-])",
            type: "string",
          },
          {
            name: "imageSize",
            in: "query",
            description:
              "Show only recipes, which have images with selected sizes",
            type: "array",
            collectionFormat: "multi",
            items: {
              type: "string",
              enum: ["LARGE", "REGULAR", "SMALL", "THUMBNAIL"],
            },
          },
          {
            name: "glycemicIndex",
            in: "query",
            description: "Filter by glycemic index. The format is FLOAT-RANGE",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "inflammatoryIndex",
            in: "query",
            description:
              "Filter by diet inflammatory index. The format is FLOAT-RANGE",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "excluded",
            in: "query",
            description:
              "Excluding recipes with certain ingredients. The format is excluded=FOOD where FOOD is replaced by the name of the specific food you don’t want to be present in the recipe results. More than one food can be excluded at the same time. Example: excluded=vinegar&excluded=pretzel will exclude any recipes which contain vinegar or pretzels in their ingredient list",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
            },
          },
          {
            name: "random",
            in: "query",
            description:
              "Select whether you want this query to respond with a random selection of 20 recipes based on the criteria filled. If there were only 20 or less possible results, this will return those results in random order.",
            type: "boolean",
          },
          {
            name: "nutrients[CA]",
            in: "query",
            description:
              "Calcium, Ca. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> For example: nutrients[CA]=50+ means minimum 50mg calcium, where ‘50+’ has to be properly encoded as ‘50%2B’ nutrients[FAT]=30 means maximum 30g fat and nutrients[FE]=5-10 means iron between 5mg and 10mg inclusive",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[CHOCDF]",
            in: "query",
            description:
              "Carbohydrate, by difference. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[CHOCDF.net]",
            in: "query",
            description:
              "Carbohydrates (net). Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[CHOLE]",
            in: "query",
            description:
              "Cholesterol. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br>See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[ENERC_KCAL]",
            in: "query",
            description:
              "Energy. Unit: kcal. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FAMS]",
            in: "query",
            description:
              "Fatty acids, total monounsaturated. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FAPU]",
            in: "query",
            description:
              "Fatty acids, total polyunsaturated. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FASAT]",
            in: "query",
            description:
              "Fatty acids, total saturated. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FAT]",
            in: "query",
            description:
              "Total lipid (fat). Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FATRN]",
            in: "query",
            description:
              "Fatty acids, total trans. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FE]",
            in: "query",
            description:
              "Iron, Fe. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FIBTG]",
            in: "query",
            description:
              "Fiber, total dietary. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FOLAC]",
            in: "query",
            description:
              "Folic acid. Unit: µg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FOLDFE]",
            in: "query",
            description:
              "Folate, DFE. Unit: µg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[FOLFD]",
            in: "query",
            description:
              "Folate (food). Unit: µg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[K]",
            in: "query",
            description:
              "Potassium, K. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[MG]",
            in: "query",
            description:
              "Magnesium. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[NA]",
            in: "query",
            description:
              "Sodium, Na. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[NIA]",
            in: "query",
            description:
              "Niacin. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[P]",
            in: "query",
            description:
              "Phosphorus, P. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[PROCNT]",
            in: "query",
            description:
              "Protein. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[RIBF]",
            in: "query",
            description:
              "Riboflavin. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[SUGAR]",
            in: "query",
            description:
              "Sugars, total. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[SUGAR.added]",
            in: "query",
            description:
              "Sugars, added. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[Sugar.alcohol]",
            in: "query",
            description:
              "Sugar alcohols. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[THIA]",
            in: "query",
            description:
              "Thiamin. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[TOCPHA]",
            in: "query",
            description:
              "Vitamin E (alpha-tocopherol). Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[VITA_RAE]",
            in: "query",
            description:
              "Vitamin A, RAE. Unit: µg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[VITB12]",
            in: "query",
            description:
              "Vitamin B12. Unit: µg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[VITB6A]",
            in: "query",
            description:
              "Vitamin B6. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[VITC]",
            in: "query",
            description:
              "Vitamin C, total ascorbic acid. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[VITD]",
            in: "query",
            description:
              "Vitamin D (D2 + D3). Unit: µg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[VITK1]",
            in: "query",
            description:
              "Vitamin K (phylloquinone). Unit: µg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[WATER]",
            in: "query",
            description:
              "Water. Unit: g. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "nutrients[ZN]",
            in: "query",
            description:
              "Zinc, Zn. Unit: mg. Input the range which is one of MIN+, MIN-MAX or MAX, where MIN and MAX are non-negative floating point numbers. <br> <br> See calcium for an example for how to fill in the range.",
            pattern:
              "(?:[+-]?\\d+(?:\\.\\d*)?)|(?:(?:[+-]?\\d+(?:\\.\\d*)?)-(?:[+-]?\\d+(?:\\.\\d*)?))|(?:(?:[+-]?\\d+(?:\\.\\d*)?)[+-])",
            type: "string",
          },
          {
            name: "field",
            in: "query",
            description: "Recipe fields to be included in the response.",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: [
                "uri",
                "label",
                "image",
                "images",
                "source",
                "url",
                "shareAs",
                "yield",
                "dietLabels",
                "healthLabels",
                "cautions",
                "ingredientLines",
                "ingredients",
                "calories",
                "glycemicIndex",
                "inflammatoryIndex",
                "totalCO2Emissions",
                "co2EmissionsClass",
                "totalWeight",
                "totalTime",
                "cuisineType",
                "mealType",
                "dishType",
                "totalNutrients",
                "totalDaily",
                "digest",
                "tags",
                "externalId",
              ],
            },
          },
          {
            name: "co2EmissionsClass",
            in: "query",
            description: "Filter recipes by their CO2 footprint.",
            type: "string",
            enum: ["A+", "A", "B", "C", "D", "E", "F", "G"],
          },
          {
            name: "tag",
            in: "query",
            description: "Show only recipes containing the specified tags.",
            type: "array",
            items: {
              type: "string",
            },
          },
          {
            name: "sysTag",
            in: "query",
            description:
              "(Beta) Show only recipes containing the specified system tags. This field is subject to account subscription restrictions.",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: ["live"],
            },
          },
          {
            name: "Accept-Language",
            description: "Search recipes in the specified language.",
            in: "header",
            type: "string",
            default: "en",
          },
        ],
        responses: {
          200: {
            description: "A list of recipes",
            headers: {
              "Content-Language": {
                type: "string",
                description: "The localization language.",
              },
            },
            schema: {
              $ref: "#/definitions/Response",
            },
          },
          400: {
            description: "A list of errors",
            schema: {
              $ref: "#/definitions/Errors",
            },
          },
          403: {
            description: "A list of errors",
            schema: {
              $ref: "#/definitions/Errors",
            },
          },
        },
      },
    },
    "/api/recipes/v2/by-uri": {
      get: {
        tags: ["Lookup recipes by URI"],
        summary: "Lookup Recipe(s) using their URI(s)",
        description:
          "Search for recipes by their URI. Note, that the API response doesn't directly indicate if there are missing recipes. Instead, you need to compare he URIs to see if any are missing.",
        parameters: [
          {
            name: "type",
            in: "query",
            description: "Type of recipes to search for.",
            required: true,
            type: "string",
            enum: ["public", "user", "any"],
          },
          {
            name: "beta",
            in: "query",
            description: "Allow beta features in the request and response",
            type: "boolean",
          },
          {
            name: "uri",
            in: "query",
            description: "Recipe URIs",
            type: "array",
            minItems: 1,
            maxItems: 20,
            items: {
              type: "string",
            },
          },
          {
            name: "app_id",
            in: "query",
            "x-data-threescale-name": "app_ids",
            description:
              "The application ID, obtained from the account dashboard, https://developer.edamam.com/admin/applications.",
            required: true,
            type: "string",
          },
          {
            name: "app_key",
            in: "query",
            "x-data-threescale-name": "app_keys",
            description:
              "The application key, obtained from the account dashboard, https://developer.edamam.com/admin/applications.",
            required: true,
            type: "string",
          },
          {
            name: "Edamam-Account-User",
            description:
              "ID of the account user. Should be used *only* if the account is configured for active user tracking.",
            in: "header",
            type: "string",
          },
          {
            name: "field",
            in: "query",
            description: "Recipe fields to be included in the response.",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: [
                "uri",
                "label",
                "image",
                "images",
                "source",
                "url",
                "shareAs",
                "yield",
                "dietLabels",
                "healthLabels",
                "cautions",
                "ingredientLines",
                "ingredients",
                "calories",
                "glycemicIndex",
                "inflammatoryIndex",
                "totalCO2Emissions",
                "co2EmissionsClass",
                "totalWeight",
                "totalTime",
                "cuisineType",
                "mealType",
                "dishType",
                "totalNutrients",
                "totalDaily",
                "digest",
                "tags",
                "externalId",
              ],
            },
          },
          {
            name: "Accept-Language",
            description: "Search recipes in the specified language.",
            in: "header",
            type: "string",
            default: "en",
          },
        ],
        responses: {
          200: {
            description: "A list of recipes",
            headers: {
              "Content-Language": {
                type: "string",
                description: "The localization language.",
              },
            },
            schema: {
              $ref: "#/definitions/Response",
            },
          },
          400: {
            description: "A list of errors",
            schema: {
              $ref: "#/definitions/Errors",
            },
          },
          403: {
            description: "A list of errors",
            schema: {
              $ref: "#/definitions/Errors",
            },
          },
        },
      },
    },
    "/api/recipes/v2/{id}": {
      get: {
        tags: ["Specific Recipe Info"],
        summary: "Lookup a Specific Recipe by ID",
        description:
          "Returns the nutritional information for given recipe. These requests are constructed automatically and can be found in <tt>hits[]._links.self.href</tt>",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The recipe ID",
            type: "string",
            required: true,
          },
          {
            name: "type",
            in: "query",
            description: "Type of recipes to search for.",
            required: true,
            type: "string",
            enum: ["public", "user"],
          },
          {
            name: "beta",
            in: "query",
            description: "Allow beta features in response.",
            type: "boolean",
          },
          {
            name: "app_id",
            in: "query",
            "x-data-threescale-name": "app_ids",
            description:
              "The application ID, obtained from the account dashboard, https://developer.edamam.com/admin/applications.",
            required: true,
            type: "string",
          },
          {
            name: "app_key",
            in: "query",
            "x-data-threescale-name": "app_keys",
            description:
              "The application key, obtained from the account dashboard, https://developer.edamam.com/admin/applications.",
            required: true,
            type: "string",
          },
          {
            name: "Edamam-Account-User",
            description:
              "ID of the account user. Should be used *only* if the account is configured for active user tracking.",
            in: "header",
            type: "string",
          },
          {
            name: "field",
            in: "query",
            description: "Recipe fields to be included in the response.",
            type: "array",
            collectionFormat: "multi",
            uniqueItems: true,
            items: {
              type: "string",
              enum: [
                "uri",
                "label",
                "image",
                "images",
                "source",
                "url",
                "shareAs",
                "yield",
                "dietLabels",
                "healthLabels",
                "cautions",
                "ingredientLines",
                "ingredients",
                "calories",
                "glycemicIndex",
                "inflammatoryIndex",
                "totalCO2Emissions",
                "co2EmissionsClass",
                "totalWeight",
                "totalTime",
                "cuisineType",
                "mealType",
                "dishType",
                "totalNutrients",
                "totalDaily",
                "digest",
                "tags",
                "externalId",
              ],
            },
          },
          {
            name: "Accept-Language",
            description: "Search recipes in the specified language.",
            in: "header",
            type: "string",
            default: "en",
          },
        ],
        responses: {
          200: {
            description: "Recipe info",
            headers: {
              "Content-Language": {
                type: "string",
                description: "The localization language.",
              },
            },
            schema: {
              $ref: "#/definitions/Hit",
            },
          },
          400: {
            description: "A list of errors",
            schema: {
              $ref: "#/definitions/Errors",
            },
          },
          403: {
            description: "A list of errors",
            schema: {
              $ref: "#/definitions/Errors",
            },
          },
          404: {
            description: "A list of errors",
            schema: {
              $ref: "#/definitions/Errors",
            },
          },
        },
      },
    },
  },
  definitions: {
    Response: {
      properties: {
        from: {
          type: "integer",
        },
        to: {
          type: "integer",
        },
        count: {
          type: "integer",
        },
        _links: {
          $ref: "#/definitions/Links",
        },
        hits: {
          type: "array",
          items: {
            $ref: "#/definitions/Hit",
          },
        },
      },
    },
    Errors: {
      type: "array",
      items: {
        $ref: "#/definitions/Error",
      },
    },
    Error: {
      properties: {
        errorCode: {
          type: "string",
        },
        message: {
          type: "string",
        },
        params: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
    },
    Links: {
      properties: {
        self: {
          $ref: "#/definitions/Link",
        },
        next: {
          $ref: "#/definitions/Link",
        },
      },
    },
    Link: {
      properties: {
        href: {
          type: "string",
        },
        title: {
          type: "string",
        },
      },
    },
    Hit: {
      properties: {
        recipe: {
          $ref: "#/definitions/Recipe",
        },
        _links: {
          $ref: "#/definitions/Links",
        },
      },
    },
    Recipe: {
      properties: {
        uri: {
          type: "string",
        },
        label: {
          type: "string",
        },
        image: {
          type: "string",
        },
        images: {
          properties: {
            THUMBNAIL: {
              $ref: "#/definitions/ImageInfo",
            },
            SMALL: {
              $ref: "#/definitions/ImageInfo",
            },
            REGULAR: {
              $ref: "#/definitions/ImageInfo",
            },
            LARGE: {
              $ref: "#/definitions/ImageInfo",
            },
          },
        },
        source: {
          type: "string",
        },
        url: {
          type: "string",
        },
        shareAs: {
          type: "string",
        },
        yield: {
          type: "number",
        },
        dietLabels: {
          type: "array",
          items: {
            type: "string",
          },
        },
        healthLabels: {
          type: "array",
          items: {
            type: "string",
          },
        },
        cautions: {
          type: "array",
          items: {
            type: "string",
          },
        },
        ingredientLines: {
          type: "array",
          items: {
            type: "string",
          },
        },
        ingredients: {
          type: "array",
          items: {
            $ref: "#/definitions/Ingredient",
          },
        },
        calories: {
          type: "number",
        },
        glycemicIndex: {
          type: "number",
        },
        inflammatoryIndex: {
          type: "number",
        },
        totalCO2Emissions: {
          type: "number",
        },
        co2EmissionsClass: {
          type: "string",
          enum: ["A+", "A", "B", "C", "D", "E", "F", "G"],
        },
        totalWeight: {
          type: "number",
        },
        cuisineType: {
          type: "array",
          items: {
            type: "string",
          },
        },
        mealType: {
          type: "array",
          items: {
            type: "string",
          },
        },
        dishType: {
          type: "array",
          items: {
            type: "string",
          },
        },
        instructions: {
          type: "array",
          items: {
            type: "string",
          },
        },
        tags: {
          type: "array",
          items: {
            type: "string",
          },
        },
        externalId: {
          type: "string",
        },
        totalNutrients: {
          $ref: "#/definitions/NutrientsInfo",
        },
        totalDaily: {
          $ref: "#/definitions/NutrientsInfo",
        },
        digest: {
          $ref: "#/definitions/Digest",
        },
      },
    },
    Ingredient: {
      properties: {
        text: {
          type: "string",
        },
        quantity: {
          type: "number",
        },
        measure: {
          type: "string",
        },
        food: {
          type: "string",
        },
        weight: {
          type: "number",
        },
        foodId: {
          type: "string",
        },
      },
    },
    NutrientsInfo: {
      additionalProperties: {
        $ref: "#/definitions/NutrientInfo",
      },
    },
    NutrientInfo: {
      properties: {
        label: {
          type: "string",
        },
        quantity: {
          type: "number",
        },
        unit: {
          type: "string",
        },
      },
    },
    Digest: {
      type: "array",
      items: {
        $ref: "#/definitions/DigestEntry",
      },
    },
    DigestEntry: {
      properties: {
        label: {
          type: "string",
        },
        tag: {
          type: "string",
        },
        schemaOrgTag: {
          type: "string",
        },
        total: {
          type: "number",
        },
        hasRDI: {
          type: "boolean",
        },
        daily: {
          type: "number",
        },
        unit: {
          type: "string",
        },
        sub: {
          $ref: "#/definitions/Digest",
        },
      },
    },
    ImageInfo: {
      properties: {
        url: {
          type: "string",
        },
        width: {
          type: "integer",
        },
        height: {
          type: "integer",
        },
      },
    },
  },
};
