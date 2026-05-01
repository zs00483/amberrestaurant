// Comprehensive menu with 100+ items optimized for performance
export const menuData = {
  // STARTERS - 28 items
  starters: [
    // Vegetarian Starters - 14 items
    { id: 1, name: 'Paneer Tikka', price: 220, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D', desc: 'Marinated cottage cheese grilled to perfection' },
    { id: 2, name: 'Hara Bhara Kabab', price: 180, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://images.unsplash.com/photo-1674622720208-2a67da6ff4e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFyYSUyMEJoYXJhJTIwS2FiYWJ8ZW58MHx8MHx8fDA%3D', desc: 'Green spinach and potato patties' },
    { id: 3, name: 'Vegetable Samosa', price: 120, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://plus.unsplash.com/premium_photo-1695297516710-854716c51121?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmVnZXRhYmxlJTIwU2Ftb3NhfGVufDB8fDB8fHww', desc: 'Crispy pastry with spiced potato filling' },
    { id: 4, name: 'Corn Chaat', price: 150, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://images.unsplash.com/photo-1708782340424-70ad28d9e020?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29ybiUyMENoYWF0fGVufDB8fDB8fHww', desc: 'Tangy corn with tamarind chutney' },
    { id: 5, name: 'Mushroom Pakora', price: 160, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?mushroom,pakora,fried,vegetarian,indian', desc: 'Battered and deep-fried mushrooms' },
    { id: 6, name: 'Aloo Tikki', price: 100, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?aloo,tikki,potato,patty,indian', desc: 'Crispy potato patties with chutneys' },
    { id: 7, name: 'Vegetable Spring Roll', price: 140, veg: true, cuisine: 'Starters', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?spring,roll,crispy,vegetable,asian', desc: 'Crispy rolls filled with vegetables' },
    { id: 8, name: 'Paneer 65', price: 200, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,65,spicy,indian,appetizer', desc: 'Spicy paneer cubes with yogurt marinade' },
    { id: 9, name: 'Gobi 65', price: 180, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?gobi,cauliflower,65,spicy,indian', desc: 'Cauliflower fritters in spicy coating' },
    { id: 10, name: 'Cottage Cheese Chilli', price: 210, veg: true, cuisine: 'Starters', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?paneer,chilli,spicy,asian,appetizer', desc: 'Paneer tossed in chilli sauce' },
    { id: 11, name: 'Bread Pakora', price: 120, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?bread,pakora,fried,indian,appetizer', desc: 'Stuffed bread fritters' },
    { id: 12, name: 'Onion Bhaji', price: 100, veg: true, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?onion,bhaji,crispy,indian,appetizer', desc: 'Crispy onion rings with gram flour' },
    { id: 13, name: 'Baby Corn Chilli', price: 200, veg: true, cuisine: 'Starters', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?baby,corn,chilli,spicy,asian', desc: 'Baby corn in spicy sauce' },
    { id: 14, name: 'Veg Manchurian', price: 190, veg: true, cuisine: 'Starters', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?manchurian,vegetable,balls,asian,appetizer', desc: 'Vegetable balls in tangy sauce' },

    // Non-Vegetarian Starters - 14 items
    { id: 15, name: 'Chicken Tikka', price: 280, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyMFRpa2thfGVufDB8fDB8fHww', desc: 'Tender chicken cubes marinated and grilled' },
    { id: 16, name: 'Chicken Lollipop', price: 220, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://images.unsplash.com/photo-1766589221215-b182d7a4df0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENoaWNrZW4lMjBMb2xsaXBvcHxlbnwwfHwwfHx8MA%3D%3D', desc: 'Honey garlic chicken wings' },
    { id: 17, name: 'Tandoori Chicken', price: 320, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFuZG9vcmklMjBDaGlja2VufGVufDB8fDB8fHww', desc: 'Smoky and spicy chicken' },
    { id: 18, name: 'Chicken 65', price: 250, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoaWNrZW4lMjBudWdnZXRzfGVufDB8fDB8fHww', desc: 'Crispy spiced chicken bites' },
    { id: 19, name: 'Seekh Kabab', price: 280, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?seekh,kabab,skewer,grilled,mughlai', desc: 'Minced meat on skewers' },
    { id: 20, name: 'Shami Kabab', price: 240, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?shami,kabab,lentil,meat,patty', desc: 'Lentil and meat patties' },
    { id: 21, name: 'Fish Tikka', price: 300, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?fish,tikka,grilled,seafood,restaurant', desc: 'Grilled fish marinated in spices' },
    { id: 22, name: 'Prawn Tikka', price: 350, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?prawn,tikka,grilled,seafood,appetizer', desc: 'Large prawns grilled with flavors' },
    { id: 23, name: 'Chicken Chilli', price: 260, veg: false, cuisine: 'Starters', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?chicken,chilli,spicy,asian,appetizer', desc: 'Chicken in spicy chilli sauce' },
    { id: 24, name: 'Chicken Manchurian', price: 270, veg: false, cuisine: 'Starters', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?manchurian,chicken,balls,tangy,asian', desc: 'Chicken balls in tangy sauce' },
    { id: 25, name: 'Spring Roll (Chicken)', price: 190, veg: false, cuisine: 'Starters', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?spring,roll,chicken,crispy,asian', desc: 'Crispy rolls with chicken filling' },
    { id: 26, name: 'Mutton Seekh', price: 300, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?mutton,seekh,kabab,grilled,mughlai', desc: 'Spiced mutton on skewers' },
    { id: 27, name: 'Chicken Pakora', price: 210, veg: false, cuisine: 'Starters', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chicken,pakora,fried,appetizer,indian', desc: 'Battered chicken fritters' },
    { id: 28, name: 'Fish Chilli', price: 280, veg: false, cuisine: 'Starters', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?fish,chilli,spicy,seafood,asian', desc: 'Fish pieces in chilli sauce' },
  ],

  // MAIN COURSE - 32 items
  mainCourse: [
    // Vegetarian Main Course - 16 items
    { id: 29, name: 'Paneer Butter Masala', price: 280, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,butter,masala,creamy,indian', desc: 'Silky paneer in creamy tomato sauce' },
    { id: 30, name: 'Paneer Tikka Masala', price: 290, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,tikka,masala,gravy,restaurant', desc: 'Grilled paneer in rich gravy' },
    { id: 31, name: 'Shahi Paneer', price: 320, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,shahi,cream,sauce,mughlai', desc: 'Paneer in royal cream sauce' },
    { id: 32, name: 'Palak Paneer', price: 260, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?palak,paneer,spinach,indian,curry', desc: 'Paneer in spinach puree' },
    { id: 33, name: 'Paneer Lababdar', price: 270, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,lababdar,onion,spicy,indian', desc: 'Paneer in spicy onion sauce' },
    { id: 34, name: 'Chole Bhature', price: 200, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chole,bhature,chickpea,bread,indian', desc: 'Chickpeas with fried bread' },
    { id: 35, name: 'Aloo Paratha', price: 150, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?aloo,paratha,potato,bread,indian', desc: 'Potato stuffed Indian bread' },
    { id: 36, name: 'Rajma Rice', price: 190, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?rajma,rice,kidney,beans,indian', desc: 'Kidney beans with rice' },
    { id: 37, name: 'Veg Biryani', price: 250, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?vegetable,biryani,rice,layered,restaurant', desc: 'Layered rice with vegetables' },
    { id: 38, name: 'Veg Pulao', price: 220, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?vegetable,pulao,rice,fragrant,indian', desc: 'Fragrant rice with mixed vegetables' },
    { id: 39, name: 'Chana Masala', price: 180, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chana,masala,chickpea,curry,indian', desc: 'Spiced chickpeas in sauce' },
    { id: 40, name: 'Baingan Bharta', price: 200, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?baingan,bharta,eggplant,roasted,indian', desc: 'Roasted eggplant puree' },
    { id: 41, name: 'Veg Hakka Noodles', price: 220, veg: true, cuisine: 'Main Course', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?hakka,noodles,vegetable,stir-fried,asian', desc: 'Stir-fried noodles with vegetables' },
    { id: 42, name: 'Veg Fried Rice', price: 200, veg: true, cuisine: 'Main Course', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?fried,rice,vegetable,asian,restaurant', desc: 'Jasmine rice with vegetables' },
    { id: 43, name: 'Veg Manchow Soup', price: 150, veg: true, cuisine: 'Main Course', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?manchow,soup,vegetable,spicy,asian', desc: 'Spicy vegetable soup' },
    { id: 44, name: 'Mixed Veg Curry', price: 240, veg: true, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?mixed,vegetable,curry,gravy,indian', desc: 'Assorted vegetables in gravy' },

    // Non-Vegetarian Main Course - 16 items
    { id: 45, name: 'Butter Chicken', price: 350, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?butter,chicken,creamy,tomato,restaurant', desc: 'Creamy chicken in tomato sauce' },
    { id: 46, name: 'Chicken Tikka Masala', price: 360, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chicken,tikka,masala,rich,gravy', desc: 'Grilled chicken in rich sauce' },
    { id: 47, name: 'Chicken Biryani', price: 320, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chicken,biryani,rice,fragrant,mughlai', desc: 'Fragrant rice with chicken' },
    { id: 48, name: 'Mutton Biryani', price: 380, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?mutton,biryani,rice,royal,restaurant', desc: 'Royal mutton biryani' },
    { id: 49, name: 'Rogan Josh', price: 340, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?rogan,josh,meat,curry,aromatic', desc: 'Aromatic meat curry' },
    { id: 50, name: 'Chettinad Chicken', price: 330, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chettinad,chicken,spicy,south,indian', desc: 'Spicy South Indian chicken' },
    { id: 51, name: 'Chicken Dopiaza', price: 310, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?dopiaza,chicken,onion,curry,indian', desc: 'Chicken with two types of onions' },
    { id: 52, name: 'Fish Curry', price: 380, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?fish,curry,coconut,seafood,restaurant', desc: 'Tangy fish in coconut gravy' },
    { id: 53, name: 'Prawn Curry', price: 420, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?prawn,curry,spicy,seafood,indian', desc: 'Large prawns in spicy sauce' },
    { id: 54, name: 'Chicken Hakka Noodles', price: 280, veg: false, cuisine: 'Main Course', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?chicken,hakka,noodles,stir-fried,asian', desc: 'Stir-fried noodles with chicken' },
    { id: 55, name: 'Chicken Fried Rice', price: 260, veg: false, cuisine: 'Main Course', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?chicken,fried,rice,asian,restaurant', desc: 'Jasmine rice with chicken' },
    { id: 56, name: 'Mutton Pulao', price: 300, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?mutton,pulao,rice,fragrant,mughlai', desc: 'Fragrant rice with mutton' },
    { id: 57, name: 'Chicken Manchow Soup', price: 180, veg: false, cuisine: 'Main Course', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?manchow,soup,chicken,spicy,asian', desc: 'Spicy chicken soup' },
    { id: 58, name: 'Prawn Fried Rice', price: 320, veg: false, cuisine: 'Main Course', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?prawn,fried,rice,seafood,asian', desc: 'Rice with prawn and vegetables' },
    { id: 59, name: 'Fish Hakka Noodles', price: 300, veg: false, cuisine: 'Main Course', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?fish,hakka,noodles,seafood,asian', desc: 'Noodles with fish' },
    { id: 60, name: 'Mutton Vindaloo', price: 360, veg: false, cuisine: 'Main Course', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?mutton,vindaloo,spicy,curry,indian', desc: 'Very spicy mutton curry' },
  ],

  // MUGHLAI SPECIALTIES - 16 items
  mughlai: [
    // Vegetarian Mughlai - 8 items
    { id: 61, name: 'Paneer Dum Biryani', price: 310, veg: true, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,dum,biryani,oven,restaurant', desc: 'Oven-cooked paneer biryani' },
    { id: 62, name: 'Paneer Korma', price: 300, veg: true, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,korma,cream,mild,indian', desc: 'Paneer in mild cream sauce' },
    { id: 63, name: 'Mutter Paneer', price: 280, veg: true, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,peas,curry,green,indian', desc: 'Paneer with green peas' },
    { id: 64, name: 'Kashmiri Paneer', price: 320, veg: true, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?kashmiri,paneer,style,mughlai,restaurant', desc: 'Paneer in Kashmiri style' },
    { id: 65, name: 'Navratan Korma', price: 290, veg: true, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?navratan,korma,vegetables,cream,indian', desc: '9 precious vegetables' },
    { id: 66, name: 'Veg Haleem', price: 270, veg: true, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?vegetable,haleem,stew,slow-cooked,mughlai', desc: 'Slow-cooked vegetable stew' },
    { id: 67, name: 'Paneer Nihari', price: 310, veg: true, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?paneer,nihari,broth,aromatic,mughlai', desc: 'Paneer in aromatic broth' },
    { id: 68, name: 'Veg Dum Pukht', price: 280, veg: true, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?dum,pukht,vegetables,slow-cooked,restaurant', desc: 'Slow-cooked vegetables' },

    // Non-Vegetarian Mughlai - 8 items
    { id: 69, name: 'Chicken Dum Biryani', price: 350, veg: false, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chicken,dum,biryani,royal,mughlai', desc: 'Royal chicken biryani' },
    { id: 70, name: 'Chicken Nihari', price: 330, veg: false, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chicken,nihari,stew,slow-cooked,mughlai', desc: 'Slow-cooked chicken stew' },
    { id: 71, name: 'Mutton Haleem', price: 350, veg: false, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?mutton,haleem,lentil,stew,restaurant', desc: 'Mutton stew with lentils' },
    { id: 72, name: 'Chicken Korma', price: 340, veg: false, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chicken,korma,cream,sauce,mughlai', desc: 'Chicken in mild cream sauce' },
    { id: 73, name: 'Mutton Dum Pukht', price: 360, veg: false, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?mutton,dum,pukht,slow-cooked,restaurant', desc: 'Slow-cooked mutton' },
    { id: 74, name: 'Fish Amritsari', price: 380, veg: false, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?fish,amritsari,fried,seafood,indian', desc: 'Fried fish with spices' },
    { id: 75, name: 'Prawn Biryani', price: 420, veg: false, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?prawn,biryani,rice,seafood,restaurant', desc: 'Prawn with fragrant rice' },
    { id: 76, name: 'Chicken Paya', price: 300, veg: false, cuisine: 'Mughlai', category: 'Mughlai', img: 'https://source.unsplash.com/800x600/?chicken,paya,slow-cooked,stew,mughlai', desc: 'Slow-cooked chicken legs' },
  ],

  // CHINESE - 12 items
  chinese: [
    // Vegetarian Chinese - 6 items
    { id: 77, name: 'Veg Chow Mein', price: 220, veg: true, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?chow,mein,noodles,vegetable,asian', desc: 'Stir-fried noodles' },
    { id: 78, name: 'Veg Schezwan Noodles', price: 240, veg: true, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?schezwan,noodles,spicy,vegetable,asian', desc: 'Spicy Schezwan noodles' },
    { id: 79, name: 'Veg Lo Mein', price: 230, veg: true, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?lo,mein,noodles,soft,vegetable', desc: 'Soft noodles with vegetables' },
    { id: 80, name: 'Corn Soup', price: 150, veg: true, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?corn,soup,creamy,asian,restaurant', desc: 'Creamy corn soup' },
    { id: 81, name: 'Mushroom Soup', price: 160, veg: true, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?mushroom,soup,earthy,asian,restaurant', desc: 'Earthy mushroom soup' },
    { id: 82, name: 'Veg Fried Momos', price: 180, veg: true, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?momos,dumplings,crispy,vegetable,asian', desc: 'Crispy dumplings' },

    // Non-Vegetarian Chinese - 6 items
    { id: 83, name: 'Chicken Chow Mein', price: 280, veg: false, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?chow,mein,chicken,noodles,asian', desc: 'Stir-fried noodles with chicken' },
    { id: 84, name: 'Chicken Schezwan Noodles', price: 300, veg: false, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?schezwan,noodles,chicken,spicy,asian', desc: 'Spicy chicken noodles' },
    { id: 85, name: 'Mutton Fried Rice', price: 310, veg: false, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?mutton,fried,rice,asian,restaurant', desc: 'Rice with mutton' },
    { id: 86, name: 'Chicken Fried Momos', price: 220, veg: false, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?momos,dumplings,chicken,crispy,asian', desc: 'Dumplings with chicken' },
    { id: 87, name: 'Prawn Chow Mein', price: 340, veg: false, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?chow,mein,prawn,noodles,seafood', desc: 'Noodles with prawns' },
    { id: 88, name: 'Fish Fried Rice', price: 300, veg: false, cuisine: 'Chinese', category: 'Chinese', img: 'https://source.unsplash.com/800x600/?fish,fried,rice,seafood,asian', desc: 'Rice with fish' },
  ],

  // SWEETS - 12 items
  sweets: [
    { id: 89, name: 'Gulab Jamun', price: 100, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?gulab,jamun,indian,dessert,sweet', desc: 'Soft milk solids in sugar syrup' },
    { id: 90, name: 'Jalebi', price: 80, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?jalebi,crispy,spiral,indian,dessert', desc: 'Crispy spirals in syrup' },
    { id: 91, name: 'Kheer', price: 120, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?kheer,rice,pudding,indian,dessert', desc: 'Rice pudding with nuts' },
    { id: 92, name: 'Rasgulla', price: 110, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?rasgulla,spongy,cheese,balls,dessert', desc: 'Spongy cheese balls' },
    { id: 93, name: 'Phirni', price: 130, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?phirni,rice,pudding,ground,indian', desc: 'Ground rice pudding' },
    { id: 94, name: 'Laddu', price: 90, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?laddu,sweet,balls,indian,dessert', desc: 'Sweet round balls' },
    { id: 95, name: 'Barfi', price: 95, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?barfi,milk,fudge,squares,indian', desc: 'Milk fudge squares' },
    { id: 96, name: 'Malai Kulfi', price: 120, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?malai,kulfi,cream,ice,cream', desc: 'Cream ice cream' },
    { id: 97, name: 'Mango Kulfi', price: 130, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?mango,kulfi,ice,cream,indian', desc: 'Mango ice cream' },
    { id: 98, name: 'Carrot Halwa', price: 110, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?carrot,halwa,pudding,indian,dessert', desc: 'Carrot pudding' },
    { id: 99, name: 'Besan Laddu', price: 100, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?besan,laddu,gram,flour,sweet', desc: 'Gram flour sweets' },
    { id: 100, name: 'Peda', price: 105, veg: true, cuisine: 'Sweets', category: 'Sweets', img: 'https://source.unsplash.com/800x600/?peda,milk,fudge,indian,sweet', desc: 'Milk fudge' },
  ],
};

// Helper to generate Unsplash image URLs for a query
const imgFor = (q, w = 800, h = 600) => {
  const query = encodeURIComponent(q);
  return `https://source.unsplash.com/${w}x${h}/?${query}`;
};

// Ensure every item has a relevant Unsplash image (based on dish name)
Object.values(menuData).flat().forEach(item => {
  // Images already optimized with specific queries
  // No additional override needed
});

// Flatten all dishes for easier access
export const getAllDishes = () => {
  return Object.values(menuData).flat();
};

// Get dishes by filter
export const filterDishes = (dishes, filterType) => {
  if (filterType === 'all') return dishes;
  if (filterType === 'veg') return dishes.filter(d => d.veg);
  if (filterType === 'nonveg') return dishes.filter(d => !d.veg);
  return dishes.filter(d => d.cuisine === filterType);
};
