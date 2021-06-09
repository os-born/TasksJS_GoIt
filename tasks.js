// ============Module1===========

// ============TASK1===========
// Change code below this line
// const productName = 'Droid';
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

// ============TASK2===========
// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// pricePerItem = (pricePerItem + 1500);

// ============TASK3===========
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// ============TASK4===========
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = (pricePerItem * orderedQuantity);

// ============TASK5===========
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// // ============TASK6===========
// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = ((pricePerDroid*orderedQuantity)+deliveryFee)
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// ============TASK7===========
// // Change code below this line
// function sayHi () {
// console.log("Hello, this is my first function!")
// };

// sayHi();

// ============TASK8===========
// // Change code below this line
// function add(a,b,c) {
//   console.log(`Addition result equals ${(a + b + c)}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ============TASK9===========
// function add(a, b, c) {
//   // Change code below this line
// return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ============TASK10===========
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// ============TASK11===========
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity*pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// ============TASK12===========
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   totalPrice = (orderedQuantity*pricePerDroid)+deliveryFee;
// message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   return message;
// }

// ============TASK13===========
// function isAdult(age) {
//   // Change code below this line
//   const passed = (age>=18);

//   // Change code above this line
//   return passed;
// }

// ============TASK14===========
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = (password===SAVED_PASSWORD);

//   // Change code above this line
//   return isMatch;
// }

// ============TASK15===========
// function checkAge(age) {
//   let message;

//   if (age>=18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// ============TASK16===========
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (available<ordered){
//   message = ("Not enough goods in stock!")
// } else 
//   message = ("Order is processed, our manager will contact you.")
//   // Change code above this line
//   return message;
// }


// ============TASK17===========
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// ============TASK18===========
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   const totalPrice = (pricePerDroid*orderedQuantity);
//     if (totalPrice>customerCredits) {
//     message = ("Insufficient funds!");
//     } else if (totalPrice<=customerCredits)
//     {    
//      message = (`You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`);
//     }
//     // Change code above this line
//     return message;
//   }
  

// ============TASK19===========
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) {
//       message =  'Canceled by user!';
//     } else if (password===ADMIN_PASSWORD) { 
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }

// ============TASK20===========
// function checkStorage(available, ordered) {
//     let message;
   
//     // Change code below this line
//     if (ordered === 0) {
//       message = "There are no products in the order!"}
//      else if (ordered > available) {
//       message ="Your order is too large, there are not enough items in stock!"}
//       else {
//         message = "The order is accepted, our manager will contact you"}
//     // Change code above this line
//     return message;
//   }

// ============TASK21===========
// function isNumberInRange(start, end, number) {
//     const isInRange = number>=start && number<=end; // Change this line
  
//     return isInRange;
//   }

// ============TASK22===========
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType==="pro" || subType==="vip"; // Change this line
  
//     return canAccessContent;
//   }

// ============TASK23===========
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
  
//     return isNotInRange;
//   }

// ============TASK24===========
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT
//     }
//     else if (totalSpent >= 20000 && totalSpent < 50000){
//     discount = SILVER_DISCOUNT
//     }
//     else if (totalSpent >= 5000 && totalSpent< 20000) {
//     discount = BRONZE_DISCOUNT
//     }
//     else {discount = BASE_DISCOUNT
//     }
//     // Change code above this line
//     return discount;
//   }

// ============TASK25===========
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  
//     message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
//     // Change code above this line
//     return message;
//   }

// ============TASK26===========
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   message = (password===ADMIN_PASSWORD) ? ("Access is allowed") : ("Access denied, wrong password!");
//     // Change code above this line
//     return message;
//   }

// ============TASK27===========
// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line
  
//    switch (type) { // Change this line
//       case "starter": // Change this line
//         price = 0; // Change this line
//         break;
  
//       case "professional":// Change this line
//         price = 20; // Change this line
//         break;
  
//       case "organization":// Change this line
//         price = 50; // Change this line
//         break;
//     }
  
//     // Change code above this line
//     return price;
//   }

// ============TASK28===========
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
    
//   switch (password) {
//     case null:
//     message = "Canceled by user!";
//     break;
    
//     case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;
    
//     default:
//       message = "Access denied, wrong password!";
//     }
    
//     // Change code above this line
//     return message;
//   }

// ============TASK29===========
// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//     let price;
//   switch (country){
//     case "China":
//     price = 100;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
      
//     case "Chile":
//     price = 250;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
      
//     case "Australia":
//     price = 170;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
      
//     case "Jamaica":
//     price = 120;
//     message = `Shipping to ${country} will cost ${price} credits`;
//     break;
      
//     default: 
//     message = "Sorry, there is no delivery to your country"
//   }
//     // Change code above this line
//     return message;
//   }
  
// ============TASK30===========
// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line
  
//     return message;
//   }
  

// ============TASK31===========
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line


// ============TASK32===========
// function getSubstring(string, length) {
//     const substring = string.slice(string, length); // Change this line
  
//     return substring;
//   }


// ============TASK33===========
// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//   if (message.length <= maxLength) {
//     result = (message);
//   } else if (result = message.slice(message, maxLength) + ("..."));
    
//     /// Change code above this line
//     return result;
//   }

  
// ============TASK34===========
// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
  
//     return normalizedInput;
//   }
  

// ============TASK35===========
// function checkForName(fullName, name) {
//     const result = fullName.includes(name) ; // Change this line
//      return result;
//    }
   

// ============TASK36===========
// function checkForSpam(message) {
//     let result;
//     let normalizeMessage; 
//     // Change code below this line
//     normalizeMessage = message.toLowerCase();
//     result = normalizeMessage.includes ('spam') || normalizeMessage.includes ('sale');
  
//     // Change code above this line
//     return result;
//   }
  
// ============Module2===========

// ============TASK1============
// function checkAge(age) {
//     if (age>=18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }

// ============TASK2============
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
//   if (password === ADMIN_PASSWORD){
    
//     return "Welcome!"}
//     return "Access denied, wrong password!"
//     // Change code above this line
//   }
  

// ============TASK3============
// function checkStorage(available, ordered) {
//     // Change code below this line
//      if (ordered === 0) {
//       return "Your order is empty!";
//     }
//     if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//        }
//     return "The order is accepted, our manager will contact you";
//     // Change code above this line
//   }
  
// ============TASK4============
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"]

// ============TASK5============
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line


// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// ============TASK6============
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// ============TASK7============
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// ============TASK8============
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// ============TASK9============
// function getExtremeElements(array) {
//     // Change code below this line
//     let restElements = [array[0], array[array.length-1]]
//    return restElements;
//     // Change code above this line
//   }

// ============TASK10===========
// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//     words = message.split(delimeter);
//     // Change code above this line
//     return words;
//   }
  
// ============TASK11===========
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//    const words = message.split(' ');
//    const totalPrice = words.length*pricePerWord;
//  return totalPrice;
//     // Change code above this line
//  }

// ============TASK12===========
// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line
//   string = array.join(delimeter);
//     // Change code above this line
//     return string;
//   }

// ============TASK13===========
// function slugify(title) {
//     // Change code below this line
//   const normalizeTitle = title.toLowerCase();
//   const array = normalizeTitle.split(' ');
//   const addDelimeter = array.join('-')
//   return addDelimeter;
//     // Change code above this line
//   }

// ============TASK14===========
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// ============TASK15===========
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// ============TASK16===========
// function makeArray(firstArray, secondArray, maxLength) {
//     let newArray = firstArray.concat(secondArray)
    
//     if (newArray.length > maxLength){
//       newArray = newArray.slice(0,maxLength)
//      return newArray;
//     }     
//     return newArray;
//     }

// ============TASK17===========
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// ============TASK18===========
// function calculateTotal(number) {
//     // Change code below this line
//     let add = 0;
//     for (let i = 0; i <= number; i+=1){
//       add += i;
//     }
//      return add;
//      // Change code above this line
//    }

// ============TASK19===========
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ============TASK20===========
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//   for (let i = 0; i<order.length; i+=1){
//   total += order[i]
//   }
//     // Change code above this line
//     return total;
//   }

// ============TASK21===========
// function findLongestWord(string) {
//     // Change code below this line
//   const arrayWords = string.split(" ");
  
//   let longestWord = arrayWords[0];
  
//   for (const arrayWord of arrayWords){
//     if (arrayWord.length > longestWord.length){
//           longestWord = arrayWord;}
//     }
//     return longestWord;
//     // Change code above this line
//   }

// ============TASK22===========
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//   for (let i=min; i<=max; i+=1)
//   numbers.push(i);
//     // Change code above this line
//     return numbers;
//   }

// ============TASK23===========
// function filterArray(numbers, value) {
//     let newArrayOfNumbers = [];
//    for (const number of numbers){
//     if (number > value) {
//       newArrayOfNumbers.push(number);
//      } 
//    }
//      return newArrayOfNumbers;
//    }

// ============TASK24===========
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     return fruits.includes(fruit) ? true : false; // Change this line
//   }
  

// ============TASK25===========
// function getCommonElements(array1, array2) {
//     // Change code below this line
//   let newArray = []
//   for (const commonNumber of array1){
//   if (array2.includes(commonNumber)){
//     newArray.push(commonNumber)}
//   }
//   return newArray
//    // Change code above this line
//   }

// ============TASK26===========
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (const item of order) {
//       total += item;
//     }
  
//     // Change code above this line
//     return total;
//   }
  

// ============TASK27===========
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (const number of numbers) {
//          if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
  

// ============TASK28===========
// Change code below this line
// const c = 11 % 4;
// const a = 3 % c;
// const b = 4 % c;
// const d = 12 % (b+c+c);
// const e = 8 % c;

// // Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % (4+3);
// const e = 8 % 3;


// ============TASK29===========
// function getEvenNumbers(start, end) {
//     // Change code below this line
//   let newArray = [];
//  for (let i=start; i<=end; i+=1) {
//  if (i % 2 ===0)
//   newArray.push(i);
//  }
//  return newArray;
 
//      // Change code above this line
//    }

// ============TASK30===========
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//     console.log(number);
//   }
// }


// ============TASK31===========
// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//       return number;
//       }
//     }
//     // Change code above this line
//   }
  
  

// ============TASK32===========
// function includes(array, value) {
//     // Change code below this line
//   for (const item of array){
//    if (item === value){
//    return true;
//    }
//   }
//     return false;
//     // Change code above this line
//   }




// ============Module3===========

// ============TASK1============
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]
//   };

// ============TASK2============
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   	owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"
//     }
//   };

// ============TASK3============
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line

// ============TASK4============
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];
//   // Change code above this line
  

// ============TASK5============
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];
//   // Change code above this line
  

// ============TASK6============
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = 'Henry Sibola';
//   apartment.tags.push("trusted");
//   // Change code below this line
  

// ============TASK7============
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {}; 
//   apartment.location.country = "Jamaica";
//   apartment.location.city = "Kingston";
//   // Change code below this line
  

// ============TASK8============
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
// name,
// price,
// image,
// tags  
//   // Change code above this line
// };

// ============TASK9============
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//  [emailInputName]: 'email',
//   ['email']: "henry.carter@aptmail.com",
//   [passwordInputName]: 'password',
//   ['password']: "jqueryismyjam"
//   // Change code above this line
// };

// ============TASK10===========
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const keys = [];
//   const values = [];
//   for (const key in apartment){
//     keys.push(key)
//     values.push(apartment[key])
//   };
//   console.log(keys)
//   console.log(values)
  
//   // Change code below this line

// ============TASK11===========
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }

// ============TASK12===========
// function countProps(object) {
//     let propCount = 0;
//       const keys = Object.keys(object);
//       propCount= keys.length;
//       return propCount;
//   }

// ============TASK13===========
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   for (const key of keys){
//   values.push(apartment[key]);
//   }
  
//   console.log(values);

// ============TASK14===========
// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//   const arrOfKeys = Object.keys(object);
//         propCount = arrOfKeys.length;
  
//     return propCount;
//     // Change code above this line
//   }
  

// ============TASK15===========
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
  

// ============TASK16===========
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     const sums = Object.values(salaries);
//   let totals = 0;
//     for (const sum of sums){
//       if (salaries.hasOwnProperty){
//   totalSalary += sum;
//       }
//     }
//     // Change code above this line
//     return totalSalary;
//   }
  

// ============TASK17===========
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
  
//   for (color of colors){
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
//   }
//   // Change code below this line
  

// ============TASK18===========
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products){
//     if (product.name === productName){
//       return product.price
//     }
//     }
//     return null;
//     // Change code above this line
//   }
  

// ============TASK19===========
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
    
//     const resultArrValues = [];
  
//   for (const obj of products){
//     const collection = Object.keys(obj);
//     for (const key of collection){
//       if (key === propName) {
//         resultArrValues.push(obj[key])
//       }
//     }
//   }
//     return resultArrValues
//     // Change code above this line
//   }
  

// ============TASK20===========
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//   let totalPrice = 0;
//     for (const obj of products){
//       if (obj.name === productName){
//       totalPrice = obj.price * obj.quantity;
//       }
//     }
//         return totalPrice
//     // Пиши код выше этой строки
//   }
  

// ============TASK21===========
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday, today, tomorrow} = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  

// ============TASK22===========
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  

// ============TASK23===========
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  

// ============TASK24===========
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
  
//   // Change code below this line
  
//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
  

// ============TASK25===========
// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   // Change code below this line
  
//   const {
//     today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//     tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
//         } = forecast;
  

// ============TASK26===========
// // Change code below this line
// function calculateMeanTemperature(forecast) {
  
//     const {
//       today: { low: todayLow, high: todayHigh },
//       tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//     } = forecast;
    
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }
  

// ============TASK27===========
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);


// ============TASK28===========
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// ============TASK29===========
// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};
  

// ============TASK30===========
// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     // Change code below this line
//   return {category, priority, ...data, completed};
//     // Change code above this line
//   }
  

// ============TASK31===========
// Change code below this line
// function add(...args) {
//     let sum = 0;
//     for (const arg of args){
//     sum += arg};
    
//     return sum;
//     // Change code above this line
//   }
  

// ============TASK32===========
// Change code below this line
// function addOverNum(smallestNumber, ...args) {
//     let total = 0;
  
//     for (const arg of args) {
//       if (arg > smallestNumber){
//       total += arg;
//       }
//     }
  
//     return total;
//     // Change code above this line
//   }
  

// ============TASK33===========


// ============TASK34===========
// ============TASK35===========
// ============TASK36===========
// ============TASK37===========
// ============TASK38===========
// ============TASK39===========
// ============TASK40===========
// ============TASK41===========
// ============TASK42===========


// ============Module4===========

// ============TASK1============
// ============TASK2============
// ============TASK3============
// ============TASK4============
// ============TASK5============
// ============TASK6============
// ============TASK7============
// ============TASK8============
// ============TASK9============
// ============TASK10===========
// ============TASK11===========
// ============TASK12===========
// ============TASK13===========
// ============TASK14===========
// ============TASK15===========
// ============TASK16===========
// ============TASK17===========
// ============TASK18===========
// ============TASK19===========
// ============TASK20===========
// ============TASK21===========
// ============TASK22===========
// ============TASK23===========
// ============TASK24===========
// ============TASK25===========
// ============TASK26===========
// ============TASK27===========
// ============TASK28===========
// ============TASK29===========
// ============TASK30===========
// ============TASK31===========
// ============TASK32===========
// ============TASK33===========
// ============TASK34===========
// ============TASK35===========
// ============TASK36===========