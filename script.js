// let firstName = "Axel";
// let lastName = "García";

// if (firstName == "Axel" && lastName == "Garcia") {
//   console.log("Name is Axel García");
// } else if (firstName == "Axel" && lastName == "Ramos") {
//   console.log("Name is Axel Ramos");
// } else {
//   console.log("Name is Axel Robles");
// }

// switch (firstName && lastName) {
//   case "Axel" && "Robles":
//     console.log("Axel Robles is the name");
//     break;
//   case "Axel" && "García":
//     console.log("Name is Axel García");
//     break;
//   default:
//     console.log("It's just another name");
// }

// let age = 22;

// if (age > 65) {
//   console.log("You get your income from your pension");
// } else if (age < 65 && age >= 18) {
//   console.log("Each month you get a salary");
// } else if (age < 18) {
//   console.log("You get an allowance");
// } else {
//   console.log("The value of your age is not numerical");
// }

// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Monday");
//     break;
//   case "Tuesday":
//     console.log("Tuesday");
//     break;
//   case "Wendsday":
//     console.log("Wendsday");
//     break;
//   case "Thurstday":
//     console.log("Thurstday");
//     break;
//   case "Friday":
//     console.log("Friday");
//     break;
//   case "Sunday":
//     console.log("Sunday");
//     break;
//   case "Saturday":
//     console.log("Saturday");
//     break;
//   default:
//     console.log("You have to input a day");
// }

// let num = 11;

// switch (true) {
//   case num > 5 || num < 10:
//     console.log("mayor a 5");
//     break;
//   case num < 5:
//     console.log("menor a 5");
//     break;
//   default:
//     console.log("none");
// }

// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// console.log("Welcome!");

// let i = 0;

// while (i != 10) {
//   i++;
//   console.log(i);
// }

// console.log("Loop finished");

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(
//       "This is character " + i + ". And this is his power number: " + j
//     );
//   }
// }

// for (let i = 1; i <= 4; i++) {
//   console.log("First number is ", i, "------------------");
//   for (let j = 1; j <= 5; j++) {
//     console.log(
//       "And First number(" + i + ") + Second number(" + j + ") is: " + (i + j)
//     );
//   }
// }

// var cubes = "ABCDEFG";
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//   var styles =
//     "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//   console.log("%c" + cubes[i], styles);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 1) {
//     console.log("Gold Medal!!!");
//   } else if (i == 2) {
//     console.log("Siver Medal");
//   } else if (i == 3) {
//     console.log("Bronze Medal");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   switch (i) {
//     case i == 1:
//       console.log("Gold Medal in switch mode!!!");
//       break;
//     case i == 2:
//       console.log("Silver Medal");
//       break;
//     case i == 3:
//       console.log("Bronze Medal");
//     default:
//       console.log(i, "position");
//   }
// }

// console.log(false || false);

// function addNum(a, b) {
//   console.log(a + b);
// }

// addNum(4, 7);

// function multipleOper(a, b, c, d) {
//   a = Number(prompt("Input a number"));
//   b = Number(prompt("Input a number"));
//   c = Number(prompt("Input a number"));
//   d = Number(prompt("Input a number"));

//   console.log(a + b + c + d);
// }

// multipleOper();

// let mainArray = ["item1", "item2", "item3", "item4", "item5"];
// let i = 0;

// function selectArray() {
//   while (i < mainArray.length) {
//     switch (mainArray[i]) {
//       case "item1":
//         mainArray[i] = "Banana";
//         break;
//       case "item2":
//         mainArray[i] = "Sandía";
//         break;
//       case "item3":
//         mainArray[i] = "Fresa";
//         break;
//       case "item4":
//         mainArray[i] = "Toronja";
//         break;
//       case "item5":
//         mainArray[i] = "Papaya";
//         break;
//     }
//     console.log(i + 1 + "---" + mainArray[i]);
//     i++;
//   }
// }

// selectArray();

// function letterFinder(word, match) {
//   for (let i = 0; i < word.length; i++) {
//     if (match == i) {
//       console.log("MATCH", word[match], "Founf it at", [i]);
//     } else {
//       console.log("Not match with ", word[i]);
//     }
//   }
// }

// letterFinder("axel", 1);

// function evenCalc(number) {
//   number = prompt("Define your number");
//   for (let i = 1; i < number; i++) {
//     if (i % 2 == 0) {
//       console.log(i, " is even!");
//     } else {
//       console.log(i, " isn't an even number");
//     }
//   }
// }

// evenCalc();

// let hand = ["rock", "papper", "scissors"];

// function play(playerVal) {
//   let cpuVal = hand[Math.round(Math.random() * hand.length)];
//   switch (true) {
//     //Case player chooses rock
//     case playerVal == "rock" && cpuVal == "rock":
//       console.log("Player:", playerVal, " CPU:", cpuVal, " TIE GAME");
//       break;
//     case playerVal == "rock" && cpuVal == "papper":
//       console.log("Player:", playerVal, " CPU:", cpuVal, "CPU WINS");
//       break;
//     case playerVal == "rock" && cpuVal == "scissors":
//       console.log("Player:", playerVal, " CPU:", cpuVal, "YOU WIN");
//       break;
//     //Case player chooses papper
//     case playerVal == "papper" && cpuVal == "rock":
//       console.log("Player:", playerVal, " CPU:", cpuVal, "YOU WIN");
//       break;
//     case playerVal == "papper" && cpuVal == "papper":
//       console.log("Player:", playerVal, " CPU:", cpuVal, "TIE GAME");
//       break;
//     case playerVal == "papper" && cpuVal == "scissors":
//       console.log("Player:", playerVal, " CPU:", cpuVal, "CPU WINS");
//       break;
//     //Case player chooses scissors
//     case playerVal == "scissors" && cpuVal == "rock":
//       console.log("Player:", playerVal, " CPU:", cpuVal, "CPU WINS");
//       break;
//     case playerVal == "scissors" && cpuVal == "papper":
//       console.log("Player:", playerVal, " CPU:", cpuVal, "YOU WIN");
//       break;
//     case playerVal == "scissors" && cpuVal == "scissors":
//       console.log("Player:", playerVal, " CPU:", cpuVal, "TIE GAME");
//     default:
//       console.log("Input a valid value");
//   }
// }

// play("rock");

// let player = {};
// let arrayPlayer = ["Has a big dick", "punch", "man"];

// player["Has a big dick"] = true;
// player["punch"] = 847;
// player["man"] = true;

// for (let i = 0; i < arrayPlayer.length + 2; i++) {
//   console.log(player[arrayPlayer[i]]);
//   player[i] = "New key value";
// }

// console.log(player);

// let arr = [];

// function arrBuilder(item1, item2, item3) {
//   arr.push(item1);
//   arr.push(item2);
//   arr.push(item3);
//   return arr;
// }

// let arrCall = arrBuilder("Axel", "Guapo", "Alto");

// console.log(arrCall);

// let arr = ["Axel", "jkfldjfklds", "Alto"];

// function calcMax() {
//   let arr1 = arr[0].length;
//   let arr2 = arr[1].length;
//   let arr3 = arr[2].length;

//   console.log(Math.max(arr1, arr2, arr3));
// }

// calcMax();

// let randomDec = Math.random() * 100;

// let randomInt = Math.round(randomDec);

// console.log(randomInt);

// let arr = ["a", "b", "c", "d", "e", "f", "g"];

// let random = Math.random() * arr.length;
// let pickRandom = Math.floor(random);

// console.log(arr[pickRandom]);

// let usrName = "Axexl ";
// let cpuName = 7;

// for (let i = 0; i < usrName.length; i++) {
//   if (usrName[i] == "x") {
//     console.log(usrName[i].toUpperCase(), i);
//   }
// }

// let clothes = [];
// let favCar = {};

// clothes.push("Jacket");
// clothes.push("Cap");
// clothes.push("Pants");
// clothes.push("Shoes");
// clothes.push("Shirt");

// clothes.pop();

// clothes.push("Watch");

// favCar.color = "Black";
// favCar.covertible = false;
// favCar["inside"] = "wood";
// favCar.turnOn = function () {
//   console.log("Car is turned on");
// };

// favCar.turnOn();
// console.log(typeof favCar.turnOn);

// console.log(a + b);
// console.log("Out of error");

// throw new definedError();

// try {
//   throw new ReferenceError();
// } catch (error) {
//   console.log("ERROR PAPU. Es este: ", error);
// }

// console.log("El código se sigue ejecutando");

// console.log(2 + b);
// console.log("El código se sigue ejecutando");
// try {
//   Math.random(Ax);
// } catch (err) {
//   console.log(err);
// }

// console.log("Something");

// let letters = "axel";

// console.log(letters.match(/a/));

// function addTwoNums(a, b) {
//   try {
//     if (
//       typeof a != "number" ||
//       typeof b != "number" ||
//       typeof a == undefined ||
//       typeof b == undefined
//     ) {
//       throw new ReferenceError("One of your values is not a number");
//     } else {
//       console.log("Good values");
//     }
//     console.log(a + b);
//   } catch (err) {
//     console.log("This is an error inside the Catch", err);
//   }
// }
// addTwoNums("ftgdfsd", 4);

// console.log("Continuing in another line...");

// function letterFinder(word, match) {
//   if (word.length < 2) {
//     console.log('The "word" parameter must be larger than 2');
//   } else if (match.length > 1) {
//     console.log('The lenght of the "match" must be of 1 letter');
//   } else if (typeof word != "string" || typeof match != "string") {
//     console.log("Your parameter values must be strings");
//   } else {
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] == match) {
//         //if the current character at position i in the word is equal to the match
//         console.log("Found the", match, "at index", i);
//       } else {
//         console.log("---No match found at", [i], word[i]);
//       }
//     }
//   }
// }

// letterFinder("sex", "x");

// function letterFinder(word, match) {
//   let condition1 = typeof word == "string" && word.length >= 2;
//   let condition2 = typeof match == "string" && match.length == 1;
//   if (condition1 && condition2 == true) {
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] == match) {
//         //if the current character at position i in the word is equal to the match
//         console.log("Found the", match, "at", i);
//       } else {
//         console.log("---No match found at", i);
//       }
//     }
//   } else {
//     console.log("MEEEHG, ERROOOOORR!!!");
//   }
// }

// letterFinder("ax", "x");

// function consoleLog(val) {
//   console.log(val);
//   return val;
// }
// consoleLog("Ax");

// function doubleInt(num) {
//   return num * 2;
// }

// function objectMaker(val) {
//   return {
//     prop: val,
//   };
// }

// console.log(objectMaker(doubleInt(30).toString()));

// let counter = 10;

// function repearVal() {
//   console.log(counter);
//   counter = counter - 1;
//   if (counter === -2) {
//     return;
//   }
//   repearVal();
// }

// repearVal("Ax");

// function myDay() {
//   console.log("Morning");
//   console.log("Afternoon");
//   console.log("Evening");
//   myDay();
// }

// function logVar() {
//   let usrName = "Axel";
//   return usrName;
// }

// console.log(logVar());
// console.log(usrName);

// function addTwoNums(a, b) {
//   console.log(a + b);
// }

// function randomNum() {
//   return Math.floor(Math.random() * 10 + 1);
// }
// function specificNum() {
//   return 42;
// }

// var useRandom = false;

// var getNumber;

// if (useRandom) {
//   getNumber = randomNum;
// } else {
//   getNumber = specificNum;
// }

// addTwoNums(getNumber(), getNumber());

// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//   let message = "%c" + txt;
//   let style = `color: ${color};`;
//   style += `background: ${background};`;
//   style += `font-size: ${fontSize};`;
//   console.log(message, style);
// }
// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//   let fontStyle = "color: tomato; font-size: 50px";
//   if (reason == "birthday") {
//     console.log(`%cHappy birthday`, fontStyle);
//   } else if (reason == "champions") {
//     console.log(`%cCongrats on the title!`, fontStyle);
//   } else {
//     console.log(message, style);
//   }
// }
// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
// celebrateStyler("birthday");
// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//   consoleStyler(color, background, fontSize, txt);
//   celebrateStyler(reason);
// }
// styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");
// // Call styleAndCelebrate

// let headphones1 = {
//   model: "RK34232",
//   color: "black",
//   qualitySound: "normal",
//   normalPrice: 135,
//   fixedPrice: function fixPrice() {
//     let taxApply = 1.15;
//     return taxApply * this.normalPrice;
//   },
// };

// let headphones2 = {
//   model: "RECCA344",
//   color: "black",
//   qualitySound: "Good",
//   normalPrice: 300,
//   fixedPrice: headphones1.fixedPrice,
// };

// console.log(headphones1.model, headphones1.fixedPrice());
// console.log(headphones2.model, headphones2.fixedPrice());

// class Product {
//   constructor(type, name, color, gamma, price, fixedPrice) {
//     this.type = type;
//     this.name = name;
//     this.color = color;
//     this.gamma = gamma;
//     this.price = price;
//     this.fixedPrice = this.taxPrice();
//   }
//   taxPrice() {
//     return this.price * 1.23;
//   }
// }

// let product1 = new Product(
//   "case",
//   "iphone 13 case generic",
//   "gray",
//   "low-end",
//   89
// );

// class Product2 extends Product {}

// console.log(typeof Product2);

// let electronics = {
//   tax: function (val) {
//     return val * 1.3;
//   },
// };

// let toys = {
//   tax: function (val) {
//     return val * 1.1;
//   },
// };

// function calcTax(type, val) {
//   console.log(type.tax(val));
// }

// calcTax(electronics, 100);

// let a = "ax";
// let b = ["el"];

// console.log([a].concat(b));

// class Person {
//   constructor(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.doubleAge = function (age) {
//       return this.age * 2;
//     };
//   }
//   tripleAge() {
//     return this.age * 3;
//   }
//   greet() {
//     console.log("This is a person");
//   }
// }

// class Man extends Person {
//   greet() {
//     super.greet();
//     console.log("Man type");
//   }
// }

// class Woman extends Person {
//   greet() {
//     console.log("Just woman type");
//   }
// }

// let Erick = new Man();

// let Danna = new Woman();

// Danna.greet();

// let human = {
//   name: "Axel",
//   tall: true,
// };

// let axel = Object.create(human);

// axel.name = "Erick";
// axel.tall = false;

// let ruiz = Object.create(axel);

// console.log(axel);

// class Screen {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
//   isItOn() {
//     console.log("Its on");
//   }
//   getProto() {
//     let proto = Object.getPrototypeOf(this);
//     console.log(proto);
//   }
// }

// let sonyTv = new Screen("Wega32", "gray");

// class Headphones {
//   constructor(baseData, gamma) {
//     this.baseData = new Screen("RKJ2002", "white");
//     this.gamma = gamma;
//     this.sale = false;
//   }
//   switchSale() {
//     return (this.sale = !this.sale);
//   }
//   thisLog() {
//     console.log(this);
//   }
//   getProto() {
//     let proto = Object.getPrototypeOf(this);
//     console.log(proto);
//   }
// }

// let chinesseHeadphones = new Headphones("China", "red");

// // console.log(chinesseHeadphones.switchSale());
// // console.log(chinesseHeadphones.thisLog());
// chinesseHeadphones.getProto();
// chinesseHeadphones.thisLog();

// class Train {
//   constructor(color, lightsOn) {
//     this.color = color;
//     this.lightsOn = lightsOn;
//   }
//   toggleLights() {
//     this.lightsOn = !this.lightsOn;
//   }
//   lightsStatus() {
//     console.log("Lights on?", this.lightsOn);
//   }
//   getSelf() {
//     console.log(this);
//   }
//   getPrototype() {
//     var proto = Object.getPrototypeOf(this);
//     console.log(proto);
//   }
// }

// var train4 = new Train("red", false);

// class Car extends Train {
//   constructor(color, lightsOn, brand) {
//     super(color, lightsOn);
//     this.brand = brand;
//   }
//   toggleHighSpeed() {
//     this.highSpeedOn = !this.highSpeedOn;
//     console.log("High speed status:", this.highSpeedOn);
//   }
//   toggleLights() {
//     super.toggleLights();
//     return "no Lights";
//   }
// }

// let car1 = new Car("yellow", true, "KIA");

// // train4.toggleLights(); // undefined
// // train4.lightsStatus(); // Lights on? true
// // train4.getSelf(); // Train {color: 'red', lightsOn: true}
// // console.log(typeof train4.getPrototype()); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// console.log(train4.toggleLights());

// class Train {
//   constructor(color, lightsOn) {
//     this.color = color;
//     this.lightsOn = lightsOn;
//   }
//   toggleLights() {
//     this.lightsOn = !this.lightsOn;
//   }
//   lightsStatus() {
//     console.log("Lights on?", this.lightsOn);
//   }
//   getSelf() {
//     console.log(this);
//   }
//   getPrototype() {
//     var proto = Object.getPrototypeOf(this);
//     console.log(proto);
//   }
// }

//Extend Class

// class HighSpeedTrain extends Train {
//   constructor(passengers, highSpeedOn, color, lightsOn) {
//     super(color, lightsOn);
//     this.passengers = passengers;
//     this.highSpeedOn = highSpeedOn;
//   }
//   toggleHighSpeed() {
//     this.highSpeedOn = !this.highSpeedOn;
//     console.log("High speed status:", this.highSpeedOn);
//   }
//   toggleLights() {
//     super.toggleLights();
//     super.lightsStatus();
//     console.log("Lights are 100% operational.");
//   }
// }

// var myFirstTrain = new Train("red", false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train("blue", false);
// var myThirdTrain = new Train("blue", false);

// var train4 = new Train("red", false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// var train5 = new Train("blue", false);
// var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

// let currentTime = new Date();

// console.log(currentTime);

// let simpleObj = {
//   name: "axel",
//   age: 30,
//   height: 182,
// };

// let jess = Object.create(simpleObj);

// jess.name = "Jess";

// console.log(jess);

// class NoDefaultParams {
//   constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
//     this.num1 = num1;
//     this.num2 = num2;
//     this.num3 = num3;
//     this.string1 = string1;
//     this.bool1 = bool1;
//   }
//   calculate() {
//     if (this.bool1) {
//       console.log(this.string1, this.num1 + this.num2 + this.num3);
//       return;
//     }
//     return "The value of bool1 is incorrect";
//   }
// }

// let testEl = new NoDefaultParams(3, 4, 10, "Axel", !false);

// console.log(testEl.calculate());

// class Animal {
//   constructor(color = "red", energy = "100") {
//     this.color = color;
//     this.energy = energy;
//   }

//   isActive() {
//     if (this.energy > 0) {
//       this.energy -= 20;
//       console.log("Energy is decreasing, currently at:", this.energy);
//     } else if (this.energy == 0) {
//       this.sleep();
//     }
//   }
//   sleep() {
//     this.energy += 20;
//     console.log("Energy is increasing, currently at:", this.energy);
//   }
//   getColor() {
//     console.log(this.color);
//   }
// }

// class Cat extends Animal {
//   constructor(
//     sound = "meow",
//     canJumphigh = true,
//     canClimbTrees = true,
//     color,
//     energy
//   ) {
//     super(color, energy);
//     this.sound = sound;
//     this.canJumphigh = canJumphigh;
//     this.canClimbTrees = canClimbTrees;
//   }
//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class Bird extends Animal {
//   constructor(sound = "Argh", canFly = true, color, energy) {
//     super(color, energy);
//     this.sound = sound;
//     this.canFly = canFly;
//   }
//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class HouseCat extends Cat {
//   constructor(
//     houseCatSound = "meow",
//     sound,
//     canJumpHigh,
//     canClimbTrees,
//     color,
//     energy
//   ) {
//     super(sound, canJumpHigh, canClimbTrees, color, energy);
//     this.houseCatSound = houseCatSound;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//     }
//     console.log(this.houseCatSound);
//   }
// }

// class Tiger extends Cat {
//   constructor(
//     tigersound = "Woulf",
//     houseCatSound = "Whipeaw",
//     sound,
//     canJumpHigh,
//     canClimbTrees,
//     color,
//     energy
//   ) {
//     super(sound, canJumpHigh, canClimbTrees, color, energy);
//     this.tigersound = tigersound;
//     this.houseCatSound = houseCatSound;
//   }
// }

// class Parrot extends Bird {
//   constructor(canTalk = false, sound, canFly, color, energy) {
//     super(sound, canFly, color, energy);
//     this.canTalk = canTalk;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//     }
//     if (this.canTalk) {
//       console.log("I'm a talking parrot!");
//     }
//   }
// }

// let tonyLeTrigre = new Tiger("Tigerrrrrr", "Miu");
// let parrotJose = new Parrot(true);

// console.log(tonyLeTrigre.tigersound);
// console.log(parrotJose.makeSound());

// class Person {
//   constructor(name = "Tom", age = 20, energy = 100) {
//     this.name = name;
//     this.age = age;
//     this.energy = energy;
//   }
//   sleep() {
//     this.energy += 10;
//   }
//   doSomethingFun() {
//     this.energy -= 10;
//   }
// }

// class Worker extends Person {
//   constructor(xp = 0, hourlyWage = 10, name, age, energy) {
//     super(name, age, energy);
//     this.xp = xp;
//     this.hourlyWage = hourlyWage;
//   }
//   goToWork() {
//     this.xp += 10;
//   }
// }

// function intern() {
//   let intern = new Worker("Blob", 21, 100, 0, 10);
//   return intern;
// }

// function manager() {
//   let manager = new Worker();
//   manager.name = "Alice";
//   manager.age = 30;
//   manager.energy = 120;
//   manager.xp = 100;
//   manager.hourlyWage = 30;
//   manager.doSomethingFun();
//   return manager;
// }

// console.log(intern());

// let mySelf = {
//   name: "axel",
//   age: 30,
//   height: 183,
// };

// let evaPeron = {
//   gender: "woman",
// };

// Object.setPrototypeOf(evaPeron, mySelf);

// console.log(evaPeron.height);
// console.log(Object.getPrototypeOf(evaPeron));

// class Man {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.doubleAge = function () {
//       return this.age * 2;
//     };
//   }
//   tripleAge() {
//     return this.age * 3;
//   }
// }

// let axel = new Man("Axel", 30);

// Man.prototype.hairSize = "short";

// // MediaDeviceInfo.hairSize = "short";

// console.log(axel.tripleAge());

// function kido(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let computer = {
//   brand: "Apple",
//   model: "MacBook Pro",
//   memory: "16GB",
//   color: "Space Grey",

//   sell: function () {
//     return `This computer ${this.model} is sold`;
//   },
// };

// function Latop(brand) {
//   this.brand = brand;
// }

// Latop.prototype.isOn = function () {
//   return `This ${this.brand} is on`;
// };

// console.log(Latop());

// class Console {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   turnOn() {
//     return `This ${this.brand} ${this.model} from ${this.year} is on`;
//   }
// }

// let xbox = new Console("Xbox", "Series X", 2020);

// console.log(xbox.turnOn());

// let wallet = {
//   money: 100,
//   cards: 4,
//   specialCoins: {
//     gold: 3,
//     silver: 2,
//     bronze: 1,
//   },
// };

// console.log(wallet.money);

// function wallet(money, cards) {
//   return {
//     money,
//     cards,
//     printCoin() {
//       console.log(money, cards);
//     },
//   };
// }

// console.log(wallet(4, 12).money);

// function Circle(radius = 3) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// let reCircle = new Circle(10);

// let reCircle2 = new Circle(20);

// reCircle.color = "red";

// delete reCircle2["radius"];

// console.log(reCircle);
// console.log(reCircle2);

// Task 1: Create a Person class
// class Person {
//   constructor(name = "Tom", age = 20, energy = 100) {
//     this.name = name;
//     this.age = age;
//     this.energy = energy;
//   }
//   sleep() {
//     this.energy += 10;
//   }
//   doSomethingFun() {
//     this.energy -= 10;
//   }
// }
// // Task 2: Code a Worker Class
// class Worker extends Person {
//   constructor(name, age, energy, xp = 0, hourlyWage = 10) {
//     super(name, age, energy);
//     this.xp = xp;
//     this.hourlyWage = hourlyWage;
//   }
//   goToWork() {
//     this.xp += 10;
//   }
// }

// // Task 3: Code an intern object
// function intern() {
//   let intern = new Worker();
//   intern.name = "Bob";
//   intern.age = 21;
//   intern.energy = 110;
//   intern.xp = 0;
//   intern.hourlyWage = 10;
//   intern.goToWork();
//   return intern;
// }

// console.log(intern().goToWork());

// // Task 4: Code a manager object
// function manager() {
//   let manager = new Worker();
//   manager.name = "Bob";
//   manager.age = 21;
//   manager.energy = 110;
//   manager.xp = 0;
//   manager.hourlyWage = 10;
//   manager.doSomethingFun();
//   return manager;
// }

// manager();

// let { PI } = Math;

// console.log(PI);

// class Sophia {
//   constructor(name, age, position, team) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.team = team;
//   }
//   printPlayer() {
//     return `${this.name} plays for ${this.team}, he is a ${this.age} years old ${this.position}.`;
//   }
// }

// class Brandenburg extends Sophia {
//   constructor(name, age, position, team, conference, homeKit, isCaptain) {
//     super(name, age, position, team);
//     this.conference = conference;
//     this.homeKit = homeKit;
//     this.isCaptain = isCaptain;
//   }
//   printPlayer() {
//     return (
//       super.printPlayer() +
//       ` He plays in ${this.conference} and his home kit is ${this.homeKit}. ${
//         this.name
//       } is the ${this.isCaptain ? "captain" : "vice captain"}`
//     );
//   }
// }

// let uchiha = new Sophia("Uchiha", 37, "Midfielder", "Sophia");
// let drago = new Brandenburg(
//   "Drago",
//   35,
//   "Defense",
//   "Brandenburg",
//   "Indigo",
//   "Black",
//   true
// );

// console.log(uchiha.printPlayer());
// console.log(drago.printPlayer());

// let gamesystems = {
//   console1: "Xbox",
//   console2: "Playstation",
//   console3: "Nintendo",
// };

// for (let gamesystem of Object.values(gamesystems)) {
//   console.log(gamesystem, gamesystems[gamesystem]);
// }

// console.log(gamesystems["console2"]);

// function randomOpt() {
//   let randomVar;
//   if (Math.random() < 0.5) {
//     randomVar = "man";
//   } else {
//     randomVar = "woman";
//   }
//   console.log(randomVar);

//   let humanObj = {
//     man: "Axel",
//     woman: "Axela",
//   };

//   console.log(humanObj[randomVar]);
// }

// randomOpt();

// let = sengaTeam = {
//   position1: "Dev Ops",
//   position2: "Data Analyst",
//   position3: "Data Scientist",
//   position4: "Web Developer",
//   position5: "Frontend Developer",
//   position6: "Backend Developer",
// };

// for (let teamMember of Object.keys(sengaTeam)) {
//   console.log(sengaTeam[teamMember]);
// }

// function Axel(age, name) {
//   this.age = age;
//   this.name = name;
// }

// let jorge = new Axel(30, "Jorge");

// console.log(Axel.prototype);
// class Human {
//   talk() {
//     return "Talking";
//   }
// }

// class Man extends Human {
//   talkMore() {
//     return super.talk(), "Talking more";
//   }
// }

// let man1 = new Man();

// console.log(man1.talkMore());

// const house = ["floor", "wall", "roof"];

// // for (let houseEl of house) {
// //   console.log(houseEl);
// // }

// const modernHouse = Object.create(house);
// modernHouse[0] = "vitropiso";

// console.log(modernHouse[0]);

// let house = {
//   floor: "tierra",
//   wall: "concreto",
//   roof: "estuco",
// };

// let modernHouse = Object.create(house);
// modernHouse.floor = "vitropiso";
// modernHouse.wall = "muro";
// modernHouse.roof = "techo";
// modernHouse.window = "ventana";

// for (let houseEl in modernHouse) {
//   console.log(houseEl, modernHouse[houseEl]);
// }

// console.log("-----------------------");

// for (let houseEl of Object.keys(house)) {
//   console.log(houseEl, house[houseEl]);
// }

// console.log(`${2} ${3} +
// ${2} ${5}
// -----------
// ${4} ${8}`);

// // Task 1
// var dairy = [
//   "cheese",
//   "sour cream",
//   "milk",
//   "yogurt",
//   "ice cream",
//   "milkshake",
// ];

// function logDairy() {
//   for (let prod of Object.keys(dairy)) {
//     console.log(dairy[prod]);
//   }
// }

// logDairy();

// // Task 2
// const animal = {
//   canJump: true,
// };

// const bird = Object.create(animal);

// bird.canFly = true;

// bird.hasFeathers = true;

// function birdCan() {
//   for (let prop of Object.keys(bird)) {
//     console.log(prop, bird[prop]);
//   }
// }

// birdCan();
// // Task 3
// function animalCan() {
//   for (let anProp in bird) {
//     console.log(anProp, bird[anProp]);
//   }
// }

// animalCan();

// var dairy = [
//   "cheese",
//   "sour cream",
//   "milk",
//   "yogurt",
//   "ice cream",
//   "milkshake",
// ];

// function logDairy() {
//   for (let prod of dairy) {
//     console.log(prod);
//   }
// }

// // logDairy();

// // Task 2
// const animal = {
//   canJump: true,
// };

// const bird = Object.create(animal);

// bird.canFly = true;

// bird.hasFeathers = true;

// function birdCan() {
//   for (let prop of Object.keys(bird)) {
//     console.log(`${prop}: ${bird[prop]}`);
//   }
// }
// // birdCan();

// // Task 3
// function animalCan() {
//   for (let prop in bird) {
//     console.log(`${prop}: ${bird[prop]}`);
//   }
// }

// animalCan();

// const groupTests = [75, 95, 90, 80, 85];
// let sumTests = 0;

// function getAverage() {
//   for (let i = 0; i < groupTests.length; i++) {
//     sumTests += groupTests[i];

//     // console.log(sumTests);
//   }
//   console.log(sumTests / groupTests.length);
// }

// getAverage();

// const groupTests = ["75", 95, "ds", 80, 85];

// // groupTests.filter(function () {
// //   return Number.isInteger();
// // });

// groupTests.map(function (num) {
//   console.log(num * 2);
// });
// let arrExample = [];

// let objExample = {
//   name: "Axel",
//   age: 30,
//   height: 182,
//   weight: 93,
// };

// let val = Object.values(objExample);

// arrExample.push(val);

// // val.forEach(function (each) {
// //   arrExample.push(each);
// // });

// console.log(val);

// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");

// console.log(bestBoxers.get(1));

// let arr = ["a", "b", "c", "d", "e", "f", "g"];

// let arrUpper = toUpper(arr);

// function toUpper(el) {
//   return el.toUpperCase();
// }

// let arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// switch (arrTest.length < 12) {
//   case true:
//     arrTest.push("X");
//     console.log(`The length of ${arrTest} is not big enough`);
//     break;
//   case false:
//     console.log(`The array is big enough`);
// }

// for (let i = 0; i < 10; i++) {
//   arrTest.push("X");
//   console.log(
//     `The length of the array is ${arrTest.length}, here it is: ${arrTest}`
//   );
// }

// while (arrTest.length < 20) {
//   arrTest.push("X");
//   console.log(arrTest);
// }

// let objTest = {
//   name: "Axel",
//   age: 30,
//   weight: 93,
// };

// objTest["height"] = 129;

// console.log(objTest);

// let arr = [1, 2, "X", 4, "R"];

// let letterArr = arr.filter(Number > 2);

// console.log(letterArr);

// let prices = [200, 300, "x", 500, 200, 300];

// let overPrice = new Set(prices);

// console.log(prices);

// console.log(overPrice);

// let topCities = ["GDL", "Sao Paulo", "Buenos Aires", "Santiago", "Dallas"];

// // const [] = topCities;
// // const [mine, brazilOne, ...toVisit] = topCities;
// // console.log(mine, brazilOne, toVisit);

// // console.log(...topCities);
// // console.log(topCities);

// let [] = topCities;
// let [mine, brazilOne, ...toVisit] = topCities;
// let restCities = [...topCities]; //mine, brazilOne, toVisit
// console.log(restCities);

// let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // console.log(Math.max(...arrNum));

// // console.log(typeof arrNum);
// // console.log(typeof ...arrNum);

// function addNum(a, b, c) {
//   console.log(a + b + c);
// }

// addNum(...arrNum);
// // console.log(...arrNum);

// function addNums(...args) {

// }

// let coffeeMakes = {
//   latte: 2,
//   americano: 3,
//   cappuccino: 4,
//   mocha: 5,
// };

// let coffeeBrands = {
//   starbucks: 6,
//   mcdonalds: 7,
//   kfc: 8,
//   boston: 9,
// };

// coffeJoin = { ...coffeeMakes, ...coffeeBrands };

// console.log(coffeJoin);

// let coffeeFlavors = ["latte", "americano", "cappuccino", "mocha", "starbucks"];

// let coffeePrices = [2, 3, 4, 5, 6];

// let coffeeFinal = [...coffeeFlavors, ...coffeePrices, "Axel Coffee"];

// console.log(coffeeFinal);

// let coffee = "Nescafé Decaf 2024";

// let arrayCoffee = [...coffee];

// console.log(arrayCoffee);

// let objectTest = {
//   name: "Axel",
//   age: 30,
//   weight: 93,
// };

// let objectTest2 = { ...objectTest };

// console.log(objectTest2);

// const meal = ["soup", "steak", "ice cream"];
// let [starter] = meal;
// console.log(starter);

// class Barcelona {
//   constructor() {
//     this.city = "Barcelona";
//   }
//   // logCity => console.log(this.city);
//   logCity() {
//     console.log(this.city);
//   }
// }

// (a, b) => console.log(a + b);

// ()
// const city = (city, country) => {
//   console.log(`You live in ${city}, ${country}`);
//   return city, country;
// };

// city("Guadalaraba", "Mexico");

// alert("Original");

// let mainBtn = document.getElementById("main-btn");
// let paragraph = document.querySelectorAll("p")[1];

// let newParagraph = document.createElement("p");
// newParagraph.innerText = prompt("What is your favorite color?");

// mainBtn.addEventListener("click", () => {
//   alert("Clicked");
//   console.log("Clicked from Original");
// });

// paragraph.addEventListener("click", () => {
//   console.log("Hovered from original");
//   paragraph.append(newParagraph);
// });

// let changeText = () => {
//   console.log("Hovered from original");
//   paragraph.appendChild(newParagraph);
// };

// let submit = document.getElementsByTagName("submit");

// let submitForm = () => {
//   alert("Submit");
// };

// submit.addEventListener("change", submitForm);

// let span = document.querySelectorAll("span");

// span[0].addEventListener("click", () => {
//   for (let i = 0; i < span.length; i++) {
//     let axelText;
//     axelText = document.createElement("p");
//     axelText.textContent = "Axelupaun";
//     axelText.classList.add("axel-text");
//     span[i].append(axelText, "X");
//   }
// });

// let title = document.querySelector("h1");

// let newH2 = document.createElement("h2");
// newH2.innerText = "Axelupis";

// title.append(newH2);

// let answer = prompt("What is your favorite color?");
// if (typeof answer === "string") {
//   let h2El = document.createElement("h2");
//   h2El.innerText = "Your favorite color is " + answer;
//   document.querySelector("h1").append(h2El);
// }

// let h1 = document.createElement("h1");
// let arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

// let handleClicks = () => {
//   h1.innerText = arr[Math.floor(Math.random() * arr.length)];
// let handleClicks = () => {
//     switch(h1.innerText) {
//         case arr[0]:
//             h1.innerText = arr[1]
//             break;
//         case arr[1]:
//             h1.innerText = arr[2]
//             break;
//         case arr[2]:
//             h1.innerText = arr[3]
//             break;
//         case arr[3]:
//             h1.innerText = arr[0]
//             break
//             default:
//             h1.innerText = arr[0]
//     }
// }
// };

// let btn = document.getElementById("main-btn");

// btn.addEventListener("click", handleClicks);

// let testObj = {
//   name: "Axel",
//   age: 30,
//   weight: 93,
//   coolness: function () {
//     return this.age * this.weight;
//   },
// };
// let sumNums = (a, b) => a + b;
// // expect(sumNums(2, 3)).toBe(5);
// module.exports = sumNums;

// // Given variables
// const dishData = [
//   {
//     name: "Italian pasta",
//     price: 9.55,
//   },
//   {
//     name: "Rice with veggies",
//     price: 8.65,
//   },
//   {
//     name: "Chicken with potatoes",
//     price: 15.55,
//   },
//   {
//     name: "Vegetarian Pizza",
//     price: 6.45,
//   },
// ];
// const tax = 1.2;

// // Implement getPrices()
// function getPrices(taxBoolean) {
//   for (let dish of dishData) {
//     let finalPrice;
//     if (taxBoolean === true) {
//       finalPrice = dish.price * tax;
//     } else if (taxBoolean === false) {
//       finalPrice = dish.price;
//     } else {
//       console.log("You need to pass a boolean to the getPrices call!");
//       return;
//     }
//     console.log(`Dish: ${dish.name}, Price: $, ${finalPrice}`);
//   }
// }

// // Implement getDiscount()
// function getDiscount(taxBoolean, guests) {
//   getPrices(taxBoolean);
//   if (typeof guests === "number" && guests > 0 && guests < 30) {
//     let discount = 0;
//     if (guests < 5) {
//       discount = 5;
//     } else if (guests >= 5) {
//       discount = 10;
//     }
//     console.log(`Discount is: $, ${discount}`);
//   } else {
//     console.log("The second argument must be a number between 0 and 30");
//   }
// }

// getDiscount(true, 10);

// var x = 0 != 1;

// let elToChange = document.querySelector("h2");
// let elh1 = document.querySelector("h1");

// elToChange.setAttribute("class", "el-to-change el-to-switch");
// elToChange.setAttribute("id", "test-id");
// elToChange.className = "el-to-change el-to-switch";
// elToChange.classList.add("el-to-change", "el-to-switch");
// elToChange.classList.replace("el-to-switch", "el-to-mo");
// elToChange.id = "new-test-id";

// console.log(elToChange.className);
// console.log(elToChange.id);

// elToChange.innerText = "Element Changed";

// elToChange.addEventListener("mouseover", function () {
//   elToChange.style.fontSize = "110px";
//   elToChange.innerText = "Su perra madre";
//   elToChange.style.transition = "0.5s";
// });

// let objTest = {
//   name: "Axel",
//   age: 30,
//   weight: 93,
//   coolness: function () {
//     return this.age * this.weight;
//   },
// };

// let objTest2 = {
//   name: "Axel",
//   age: 30,
//   weight: 93,
//   coolness: function () {
//     return this.age * this.weight;
//   },
// };

// let arrTest = [objTest, objTest2];

// console.log(arrTest);

// let mainBtn = document.getElementById("main-btn");

// mainBtn.addEventListener("click", () => {
//   alert("Clicked");
//   console.log("Clicked");
// });

// let axel = new Map([
//   ["name", "Axel"],
//   ["age", 30],
//   ["weight", 93],
// ]);

// axel.set("coolness", function () {
//   return "Very Cool";
// });

// axel.set("skinColor", "brown");

// // console.log(axel);

// axel.forEach((value, key) => {
//   console.log(`${key}: ${value} For Each Test`);
// });

// let axelPromise = new Promise((resolve, reject) => {
//   if (resolve > 10) {
//     resolve("Axel");
//   } else {
//     reject("Nope");
//   }
// });

// axelPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

// let axelWin = new Promise((resolve, reject) => {
//   console.log("Primise process started");

//   let wins = true;

//   setTimeout(() => {
//     if (wins === true) {
//       resolve("Promise resolved, Axel won");
//     } else {
//       reject("Promise rejected, Axel lost");
//     }
//   }, 2000);
// });

// axelWin
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let usElection = new Promise((resolve, reject) => {
//   let results = "Kamala";
//   console.log("Generating results...");

//   setTimeout(() => {
//     if (results == "Trump") {
//       resolve("Election is over, Trump wins");
//     } else {
//       reject("Election is over, Kamala wins");
//     }
//   }, 2000);
// });

// usElection
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let playerLevels = {
//   Arai: 89,
//   Jest: 83,
//   Mashiro: 85,
//   Beck: 90,
//   Hime: 90,
//   Reila: 91,
// };

// let filterPlayerLevels = Object.values(playerLevels);

// let topPlayers = filterPlayerLevels.filter((level) => level > 89);

// console.log(topPlayers);

// let manNames = ["Axel", "Ramon", "David", "Mark"];
// let girlNames = ["Danna", "Perla", "Paola", "Helenn"];
// let allNames = [...manNames, ...girlNames, "Mikola", "Thuram", "Xevius"];

// console.log(...manNames);

// let axel = {
//   name: "Axel",
//   age: 30,
//   height: 183,
// };

// let updatedAxel = {
//   ...axel,
//   weight: 93,
//   skinColor: "brown",
//   sausageSize: 18,
// };

// let fullAxel = {
//   ...axel,
//   ...updatedAxel,
// };

// console.log(...axel);

// let [first, second, ...rest] = ["Headphones", "ChatGPT", "Coffee", "VSCode", "Internet", "Keyboard"];

// console.log(first, second, ...rest);

// function addNums(...nums) {
//   return nums.reduce((total, num) => total + num, 0);
// }

// console.log(addNums(10, 2));

// let axel = {
//   name: "Axel",
//   age: 30,
//   weight: 93,
// };

// let updatedAxel = {

// let printNames = (...names) => {
//   names.forEach((name) => {
//     console.log(`The name is: ${name}`);
//   });
// };

// console.log(printNames("Axel", "Ramon", "David", "Mark"));

// let axel = {
//   name: "Axel",
//   age: 30,
//   height: 183,
//   weight: 93,
//   skinColor: "brown",
//   hairSize: "short",
//   sausageSize: 18,
// };

// let { name, age, ...extraInfo } = axel;

// console.log(age);

// console.log(extraInfo);

// function describeAxel(height, callback) {
//   console.log(`Axel has a height of: ${height}`);
//   callback();
// }

// function describeFeature() {
//   console.log(`His feature is being guapo`);
// }

// describeAxel(183, describeFeature);

// function makeOperation(num, callback) {
//   console.log(num);
//   callback();
// }

// function operation1(num) {
//   console.log(num * 2);
// }

// function operation2() {
//   num * 3;
// }

// console.log(makeOperation(10, operation1));
// (function () {
//   console.log("This is a function expression");
// })();
// let personObject = {
//   name: "Axel",
//   age: 30,
//   height: 183,
//   weight: 93,
//   skinColor: function () {
//     return `brown for ${this.name} person`;
//   },
//   hairSize: "short",
// };

// let axel = new Object(personObject);

// axel.name = "Alejandro";

// console.log(axel.skinColor());

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let tripleArr = arr.map(function (el) {
//   return el * 3;
// });

// console.log(tripleArr);

// let bigArr = arr.map(function (el) {
//   return el > 8;
// });

// let reduceArr = arr.reduce(function (el, total) {
//   return el + total;
// });

// console.log(reduceArr);

// let arrDouble = arr.map((el) => el * 2);

// let filterLessThan5 = arr.filter((val) => val < 5);

// console.log(filterLessThan5);

// const palindromes = function (el) {
//   let reverseEl = el.split("").reverse().join("");
//   if (el == reverseEl) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// palindromes("racecar");

// const books = [
//   {
//     title: "Book",
//     author: "Name",
//   },
//   {
//     title: "Book2",
//     author: "Name2",
//   },
// ];

// const getTheTitles = function () {
//   let title1 = books[0].title;
//   let title2 = books[1].title;
//   let bookTitles = [];
//   bookTitles.push(title1, title2);

//   console.log(bookTitles);
// };

// getTheTitles();

// const findTheOldest = function () {};

// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Animal.prototype.speak = function () {
//   console.log(`I am ${this.name} and I am ${this.age} years old`);
// };

// Animal.prototype.height = this.height;

// let eliot = new Animal("Eliot", 20);

// // eliot.height = 183;

// console.log(eliot);

// const myName = "Oxel";

// const testName = myName == "Oxel" ? true : false;

// console.log(myName == 'Exel' ? :);
// function makeTea(args) {
//   return `Team meands ${args}`;
// }

// function processTeaOrder(fn) {
//   return makeTea("Sweet tea");
// }

// console.log(processTeaOrder(makeTea));

// function createTeaMaker() {
//   return function (teaType) {
//     return `Making ${teaType}`;
//   };
// }

// let teaMaker = createTeaMaker();

// console.log(teaMaker("Chai"));

// function stringToNumber(input) {
//   return typeof input === "string" ? Number(input) : console.log("Your input is not a string");
// }
// function flipBoolean(input) {
//   return !input;
// }
// console.log(flipBoolean(1));

// function whatAmI(input) {
//   switch (typeof input) {
//     case "string":
//       console.log("Im a string");
//       break;
//     case "number":
//       console.log("Im a number");
//       break;
//     default:
//       console.log("Im something else");
//   }
// }

// whatAmI(null);

// function isItTruthy(input) {}

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // function filterNumbers(arr) {
// //   return arr.filter((el) => el > 5);
// // }

// // console.log(filterNumbers(myArr));

// // function reverseArray(arr) {
// //   return arr.reverse();
// // }

// // console.log(reverseArray(myArr));

// function findMax(arr) {
//   return arr;
// }

// function removeDuplicates(arr) {
//   return arr;
// }

// function flattenArray(arr) {
//   return arr;
// }

// let teaFlavors = ["green tea", "black tea", "oolong tea"];

// let olongFlavor = teaFlavors.pop();

// console.log(olongFlavor);

// let popularTeas = ["green tea", "ooling tea", "chai", "Mexichai"];
// // let secondaryTeas = ["red tea", "ass tea", "Luxalatto"];

// // // let allTeas = [...popularTeas, ...secondaryTeas];
// // let allTeas = popularTeas.concat(secondaryTeas);

// // console.log(allTeas);

// // for (let i = 0; i < popularTeas.length; i++) {
// //   popularTeas[i] === "chai" ? console.log(`Yes, is in the index ${i}`) : false;
// // }

// let isChai = popularTeas.includes("chaiX");

// console.log(isChai);

// function makeAdding(firstNumber) {
//   // "first" is scoped within the makeAdding function
//   const first = firstNumber;
//   return function resulting(secondNumber) {
//     // "second" is scoped within the resulting function
//     const second = secondNumber;
//     return first + second;
//   };
// }
// // but we've not seen an example of a "function"
// // being returned, thus far - how do we use it?

// const add5 = makeAdding(5);
// console.log(add5(2)); // logs 7

// /*************  ✨ Codeium Command ⭐  *************/
// /**
//  * Returns a new function that adds two numbers.
//  *
//  * @param {number} firstNum The first number to add.
//  * @returns {function(number): number} A new function that takes a second number
//  *   to add and returns the sum of the two.
//  */
// /******  878e0980-8eea-4b57-8ee5-8063b68ef402  *******/
// function addFirst(firstNum) {
//   const first = firstNum;
//   return function addSecond(secondNum) {
//     const second = secondNum;
//     return first + second;
//   };
// }

// let add20 = addFirst(20);
// console.log(add20(2));

// write an object constructor

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.printName = function () {
//     console.log(this.name);
//   };
//   this.printAge = function () {
//     console.log(this.age);
//   };
// }

// function Human(name, age) {
//   this.name = name;
//   this.age = age;
//   this.printName = function () {
//     console.log(this.name);
//   };
//   this.printAge = function () {
//     console.log(this.age);
//   };
// }
// let axel = new Human("Axel", 30);
// axel.printName();

// const person = {
//   name: "Axel",
//   age: 30,
//   printName() {
//     console.log(this.name);
//   },
//   printAge() {
//     console.log(this.age);
//   },
// };

// const axel = Object.create(person);

// axel["name"] = "Alex";
// // axel.printName();
// // console.log(Object.getPrototypeOf());

// console.log(person.valueOf());
// function makeClosure(val1) {
//   let firstVal = val1;
//   return function (val2) {
//     return firstVal + val2;
//   };
// }

// let add20 = makeClosure(20);
// console.log(add20(7));

// function miroNums(num1) {
//   return function (num2) {
//     return num1 * num2;
//   };
// }

// const newMiroOperation = miroNums(8);

// console.log(newMiroOperation(7));

// function Car() {
//   this.color = "red";
//   this.wheels = 4;
//   this.speed = 0;
//   this.accelerate = function (speed) {
//     this.speed += speed;
//   };
// }

// let mycar = Car("red", 4, 0);

// console.log(mycar.speed);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.printName = function () {
//     console.log(this.name);
//   };
// }

// let erick = new Person("Erick", 30);

// erick.printName();

// function createPerson(name, age) {
//   let printName = function () {
//     console.log(this.name);
//   };
//   return { name, age, printName };
// }

// let axel = createPerson("Axel", 30);

// axel.printName();

// let uniqueVal = Symbol("unique");

// console.log(typeof uniqueVal);

// let ultraNum = 2n;

// console.log(ultraNum);

// let carBrands = ["Toyota", "Honda", "Nissan", "Chevrolet"];

// for (el of carBrands) {
//   console.log(el);
// }

// let axel = {
//   name: "Axel",
//   age: 30,
//   printName() {
//     console.log(this.name);
//   },
//   printAge() {
//     console.log(this.age);
//   },
// };

// // for (val in axel) {
// //   console.log(val, axel[val]);
// // }

// // for (val in axel) {
// //   console.log(`The key is ${val}, and the value is ${axel[val]}`);
// // }

// for (val of Object.keys(axel)) {
//   console.log(`The key is ${val}, and the value is ${axel[val]}`);
// }

// let names = ["Pepe", "Rau", "Erickssen", "Ramona"];

// while (names.length > 0) {
//   console.log(names.shift());
//   console.log(names);
// }

// let names = ["Pepe", "Rau", "Erickssen", "Ramona"];
// // let i = 0;

// // do {
// //   console.log(names[i]);
// //   i++;
// // } while (i < names.length);

// do {
//   console.log(names);
// } while (names.length > 10);
// let calcPrice = (price, discount) => price * ((100 - discount) * 0.01);

// console.log(calcPrice(700, 35));

// function generateNum1() {
//   return 2 + 12;
// }

// function addNums(generateNum1, c) {
//   return generateNum1 + c;
// }

// console.log(addNums(generateNum1, 7));

// function nameA() {
//   return "Axel";
// }

// function nameComplete() {
//   return `Hello, my name is ${nameA()} Robles`;
// }

// console.log(nameComplete(nameA()));

// function basis() {
//   return "Axel";
// }

// let person = {
//   name: "Erick",
//   age: 30,
// };

// basis.call(person);

// console.log(basis.call(person));

// function printName() {
//   function printFirstName() {
//     return "Axel";
//   }
//   function printLastName() {
//     return "Robles";
//   }

//   return `${printFirstName()} ${printLastName()}`;
// }

// printName();

// const person = {
//   name: "Erick",
//   age: 30,
//   message: function () {
//     return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
//   },
// };

// console.log(person.message());
// const productName = "Monitor de 20 pulgadas";
// const price = "$300";
// const available = true;

// function productDetails() {
//   const productName = "Macbook Pro";
//   const price = "$1000";
//   return {
//     productName,
//     price,
//     available,
//   };
// }

// console.log(productDetails());
// console.log(productName, price, available);

// function outerFunction() {
//   let outer = "Outer";
//   function innerFunction() {
//     let inner = "Inner";
//     console.log(`Outer: ${outer}, Inner: ${inner}`);
//   }
//   return innerFunction;
// }

// const closureExample = outerFunction();
// closureExample();
// function createCounter() {
//   let count = 0;
//   console.log(count);

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let printCounter = createCounter();
// printCounter();
// printCounter();
// printCounter();

// let printCounter2 = createCounter();
// printCounter2();
// printCounter2();
// printCounter2();

// const axelArr = new Array(Number(1));

// console.log(axelArr);

// let arrName = ["Axel", "Erick", "Robles"];

// console.log(Array.isArray(arrName));

// const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrNums2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
//   }
//   return sum;
// }

// console.log(sumArray(arrNums2));

// const cities = ["Bogota", "Medellin", "Cali", "Barranquilla", "Cartagena"];
// // const newCities = cities.push("CDMX", "Mexico City", "Monterrey", "Guadalajara", "Tijuana");

// // console.log(cities.pop());
// // console.log(newCities);
// // console.log(cities);

// const newCities =

// const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let tripleNums = arrNums.forEach((el) => {
//   return el * 3;
// });

// console.log(tripleNums);
// const iteratedNumbers = arrNums.forEach((el) => console.log(el + 8));

// console.log(iteratedNumbers);
// const whitePerson = [98];

// const toBrownPerson = whitePerson.map((person) => person * 0.8);
// const toBlackPerson = whitePerson.map((person) => person * 0.7);
// const toIndianPerson = whitePerson.map((person) => person * 0.4);

// console.log(toBrownPerson);
// console.log(toBlackPerson);
// console.log(toIndianPerson);

// let arrLetters = ["a", "b", "b", "b", "c", "d", "d", "e"];

// let sum = 0;

// arrNums.forEach((el) => {
//   sum += el;
// });

// console.log(sum);

// const filterArr = arrNums.filter((el) => {
//   return el % 2 === 0;
// });

// console.log(filterArr);

// const sumArr = arrNums.reduce((acc, el) => {

// });

// console.log(sumArr);
// const fourFinder = arrNums.reduce((acc, num) => {
//   if (acc[num]) {
//     acc[num]++;
//   } else {
//     acc[num] = 1;
//   }
//   return acc;
// }, {});

// console.log(fourFinder);

// let arrLetters = ["a", "b", "b", "b", "c", "d", "d", "e"];

// let Letters = ["a", "b", "b", "b", "c", "d", "e"];

// const letterFrecuency = Letters.reduce((acc, el) => {
//   if (acc[el]) {
//     acc[el]++;
//   } else {
//     acc[el] = 1;
//   }
//   return acc;
// }, {});

// console.log(letterFrecuency);

// const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numGreaterThan5 = arrNums.findIndex((el) => el > 5);

// console.log(numGreaterThan5);
// const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const twoToSix = arrNums.slice(1, 6);

// console.log(twoToSix);

const names = ["Axel", "Erick", "Robles", "Victor", "Gunn", "Rafa", "Nadal"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const someNames = names.slice();

// console.log(someNames);
const mergedArr = [...names, ...numbers];
const extraNames = [...names, "Duluio", "Amorebiera", "Gianluca"];

console.log(mergedArr, extraNames);
