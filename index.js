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

let price = 500;
const isLeader = true;

// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);

price = isLeader === true ? 0 : price + 100;
