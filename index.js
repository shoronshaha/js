// const price = 500;
// const age = 44;

// if (age <= 12) {
//   console.log("you can eat for free");
// } else if (age >= 60) {
//   const discount = (price * 5) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else if (age >= 40) {
//   const discountSec = (price * 3) / 100;
//   const payAmountTwo = price - discountSec;
//   console.log(payAmountTwo);
// } else {
//   console.log("tumi khete parbe na");
// }

// /*ternary*/
// const age = 18;
// age >= 19 ? console.log("vote dioo") : console.log("gumai thako");

// let price = 500;
// const isLeader = true;

// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 100;

// const friends = ["tapu", "shimul", "rajes", "rajib", "krisno"];
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.push("shoron", "aurbo");
// console.log(friends);
// friends[1] = "somitro";
// console.log(friends);

// const array = [2, 8, 9];
// const job = array.indexOf(7);
// console.log(job);

// const player = friends.concat(array);
// console.log(player);

// const fruits = ["appel", "orange", "mango", "pineapple", "banana"];
// console.log(fruits.length);
// for (const fruit of fruits) {
//   console.log(fruit);
//   console.log("ami khabo");
// }

// const number = 7;
// if (number < 10) {
//   console.log("monre moto number ache");
// }
// console.log("moner moto number payni");

// let num = 0;
// while (num < 5) {
//   console.log("djfjfd", num);
//   num++;
// }

// let num = 0;
// while (num <= 10) {
//   console.log("fjdjf", num);
//   num++;
// }

// let num = 1;
// let sum = 0;
// while (num <= 10) {
//   console.log(num);
//   sum = sum + num;
//   console.log("sum", sum);
//   num++;
// }

// let num = 1;
// while (num <= 10) {
//   console.log(num);

//   if (num % 2 === 1) {
//     console.log("even num", num);
//   }
//   num++;
// }

// for (let num = 0; num < 10; num++) {
//   console.log(num);
// }

// for (let num = 0; num < 10; num = num + 2) {
//   console.log(num);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i <= 30; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// let total = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//     total = total + i;
//     console.log(total);
//   }
// }
// console.log("total of the numbers", total);

// let n = 54;
// while (n > 25) {
//   console.log(n);
//   if (n < 50) {
//     break;
//   }
//   n--;
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

// let n = 0;
// while (n < 50) {
//   n++;
//   if (n % 5 !== 0) {
//     continue;
//   }
//   console.log(n);
// }

// let n = 20;
// do {
//   console.log(n);
//   n++;
// } while (n < 5);

// const last = "tapu";
// console.log(last.includes("a"));

// const address = `i am a good and hardworking person`;

// const part = address.slice(2, 5);
// console.log(part);

// const port = address.split("a");
// console.log(port);

// const sentence = "i am learning web dev";
// let reverse = "";
// for (const letter of sentence) {
//   //   console.log(letter);
//   reverse = letter + reverse;
// }
// console.log(reverse);
// let rev = "";
// for (let i = 0; i < sentence.length; i++) {
//   console.log(i);
//   console.log(sentence[i]);
//   const letter = sentence[i];
//   rev = letter + rev;
// }
// console.log(rev);

// const reversed = sentence.split("").reverse();
// console.log(reversed);

// const computer = {
//   brand: "lenovo",
//   price: 35000,
//   processor: "intel",
//   hdd: "512gb",
// };

// const key = computer;
// console.log(key);

// for (const prop in computer) {
//   // console.log(prop);
//   console.log(prop, ":", computer[prop]);
// }
// objectLength = Object.keys(computer).length;
// console.log(objectLength);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// for (i = 0; i < numbers.length; i++) {
//   console.log(i);
// }

// while (i < numbers.length) {
//   console.log(i);
//   i++;
// }

// numbers.reverse();
// console.log(numbers);

// rev_numbers = [];
// for (const num of numbers) {
//   rev_numbers.unshift(num);
// }
// console.log(rev_numbers);

// const reversed_numbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   const num = numbers[i];
//   reversed_numbers.unshift(num);
// }
// console.log(num);

// for (let i = numbers.length - 1; i >= 0; i--) {
//   const num = numbers[i];
//   console.log(num);
// }

// const person = ["rakib", "nokib", "sakib", "akib", "dakib", "anis", "Anis"];
// const sortedName = person.sort();
// console.log(sortedName);

// const number = 45;

// function brushTeeth() {
//   console.log("brash kore aslam");
// }
// brushTeeth();

// TODO: function
// function square(number) {
//   console.log("value of the number parameter", number);
//   const borgo = number * number;
//   console.log("square of the given number is:", borgo);
// }
// square(6);

// str jsdjfls slfjslkdj
// end dfjjfd

// ! sdjdsjf
// function add(a, b) {
//   const multiple = a * b;
//   console.log("the given value", a, b);
//   console.log("the result is :", multiple);
// }
// add(5, 6);

// function tenTimes(number) {
//   const result = number * 10;
//   return result;
// }
// const totalUpdate = tenTimes(77);
// console.log(totalUpdate);

// function add(num1, num2) {
//   const sum = num1 + num2;
//   const dif = num1 - num2;
//   const multiple = sum * dif;
//   const div = multiple / 2;

//   return div;
// }
// const result = add(20, 10);
// console.log(result);

// function doubleOrTriple(number, doDouble) {
//   if (doDouble === true) {
//     const result = number * 2;
//     return result;
//   } else {
//     const result = number * 3;
//     return result;
//   }
// }
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// function sumOfNumber(numbers) {
//   let sum = 0;
//   console.log(sum);
//   for (const number of numbers) {
//     console.log(number);
//     sum = sum + number;
//     console.log(sum);
//   }
//   return sum;
// }

// const numbs = [54, 62, 12, 6];
// const sum = sumOfNumber(numbs);
// console.log("sum of numbers is", sum);

// function evenNumbersOnly(numbers) {
//   const evens = [];
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       console.log(number);
//       evens.push(number);
//     }
//   }
//   return evens;
// }
// const numbers = [4, 13, 8, 3, 6];
// const evens = evenNumbersOnly(numbers);
// console.log(evens);

// str ES6

// const numbers = [55, 65, 75, 85];
// const student = { name: "shoron", age: 5 };
// const math = `the sum of ${numbers[0]} and ${student.age} is ${
//   numbers[0] + student.age
// }`;
// console.log(math);

// ! arrow function
// const addArr = [];
// const add = (a, b, c, d) => a + b + c + d;
// const sum = add(4, 5, 6, 7);
// console.log(sum);

// const getAge = (person) => person.age;
// const student = { name: "ananata", age: 45 };
// const age = getAge(student);
// console.log(age);

// const getThird = (numbers) => numbers[4];
// const third = getThird([6, 7, 8, 9, 3]);
// console.log(third);

//! large arrow function
// const doMath = (x, y, z = 1) => {
//   const sum = x + y + z;
//   const mult = x * y * z;
//   const result = sum + mult;
//   return result;
// };
// const total = doMath(10, 23);
// console.log(total);

//* add extra elements while copy

// const sonkha = [...friends, 879];
// console.log(sonkha);

//* destructure
// function doubleThem(a, b) {
//   return [a * 2, b * 2];
// }
// const [prothom, ditiyo] = doubleThem(6, 9);
// console.log(prothom, ditiyo);

// const doubleThem = (a, b) => [a * 2, b * 2];
// const [prothom, ditio] = doubleThem(9, 8);
// console.log(prothom, ditio);

// const data = [{ class: 6, address: "djfjfj" }];
// console.log(data[0]);
// console.log(data[0].address);

// const user = {
//   name: "shoron",
//   number: "939393",
//   age: 67,
//   birthDay: "12-01-24"

// }

//! map
// const numbers = [5, 6, 4, 3, 8, 1];
// const total = numbers.forEach;
// console.log(total);

//! class
// const products = [
//   { id: 1, name: "lenovo", price: 23223 },
//   { id: 2, name: "opo", price: 34234 },
//   { id: 3, name: "dek", price: 2342 },
//   { id: 4, name: "nek", price: 3242 },
// ];

// class Products {
//   country = "Bangladesh";
//   constructor(name) {
//     this.name = name;
//   }
//   speak(talk) {
//     console.log(`talking about ${talk}`);
//   }
// }

// const lenovo = new Products("lenovo");
// console.log(lenovo);
// lenovo.speak("ki obstha");

// class Vehicle {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   move() {
//     console.log("gari chole na chole na chole na");
//   }
// }

// class Bus extends Vehicle {
//   constructor(name, price, seat, ticket) {
//     super(name, price);
//     this.seat = seat;
//     this.ticket = ticket;
//   }
// }

// class Truck extends Vehicle {
//   constructor(name, price, load) {
//     super(name, price);
//     this.load = load;
//   }
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sleep() {
//     console.log(`sleeping now ${this.name}`);
//   }
//   activity() {
//     this.sleep();
//   }
// }

// const kodom = new Person("kodom Ali", 21);
// console.log(kodom);
// kodom.sleep();

//! call back function
// function greeting(greetingHandler, name) {
//   greetingHandler(name);
// }
// function greetingHandler(name) {
//   console.log("good monrning", name);
// }

// greeting(greetingHandler, "shoron");
// greeting(greetingHandler, "tapu");

//! arguments
function add(a, b, c) {
  const args = [...arguments];
  console.log(args);
  const sum = a + b + c;
  return sum;
}
const result = add(4, 5, 6, 7, 8, 9);
console.log(result);
