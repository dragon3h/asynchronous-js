'use strict';
// https://github.com/metatech-university/Async-2024/blob/main/Tasks/Callbacks/2-error-problem.js

// Task: return an error for items with negative price
// Hint: use callback-last-error-first contract

const total = (items, callback) => {
  let result = 0;
  for (const item of items) {
    if (item.price < 0) {
      callback(new Error('wrong result'));
      return;
    }
    result += item.price;
  }

  callback(null, result);
};

const electronics = [
  { name: 'Laptop', price: -1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

total(electronics, (error, money) => {
  if (error) {
    console.error('error happened', error);
  } else {
    console.log({ money });
  }
});