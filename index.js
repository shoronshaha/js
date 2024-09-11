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

/*ternary*/
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

const sentence = "i am learning web dev";
// let reverse = "";
// for (const letter of sentence) {
//   //   console.log(letter);
//   reverse = letter + reverse;
// }
// console.log(reverse);
let rev = "";
for (let i = 0; i < sentence.length; i++) {
  //   console.log(i);
  //   console.log(sentence[i]);
  const letter = sentence[i];
  rev = letter + rev;
}
console.log(rev);

const reversed = sentence.split("").reverse();
console.log(reversed);
