'use strict';

// https://github.com/metatech-university/Async-2024/blob/main/Tasks/Callbacks/4-hell-problem.js

// Task: refactor callback hell code with named callbacks
// Restriction: you can change code only in "Usage" section

const getPurchase = (callback) =>
  callback({
    Electronics: [
      { name: 'Laptop', price: 1500 },
      { name: 'Keyboard', price: 100 },
      { name: 'HDMI cable', price: 10 },
    ],
    Textile: [{ name: 'Bag', price: 50 }],
  });

const iterateGroups = (order, callback) => {
  for (const groupName in order) {
    const group = order[groupName];
    callback(group);
  }
};

const groupTotal = (items, callback) => {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  callback(total);
};

const budget = (limit) => {
  let balance = limit;

  const withdraw = (value, callback) => {
    const success = balance >= value;
    if (success) balance -= value;
    callback(success);
  };

  const rest = (callback) => callback(balance);

  return { withdraw, rest };
};

// Usage

const wallet = budget(1650);
let amount = 0;
const cb1 = (subtotal) => (success) => {
  if (success) amount += subtotal;
  wallet.rest((balance) => {
    console.log({ success, amount, subtotal, balance });
  });
};

const cb2 = (subtotal) => wallet.withdraw(subtotal, cb1(subtotal));

const cb3 = (group) => groupTotal(group, cb2);

getPurchase((purchase) => iterateGroups(purchase, cb3));

// getPurchase((purchase) => {
//   let amount = 0;
//   iterateGroups(purchase, (group) => {
//     groupTotal(group, (subtotal) => {
//       wallet.withdraw(subtotal, (success) => {
//         if (success) amount += subtotal;
//         wallet.rest((balance) => {
//           console.log({ success, amount, subtotal, balance });
//         });
//       });
//     });
//   });
// });
