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

class Console {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  turnOn() {
    return `This ${this.brand} ${this.model} from ${this.year} is on`;
  }
}

let xbox = new Console("Xbox", "Series X", 2020);

console.log(xbox.turnOn());
