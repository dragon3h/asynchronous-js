'use strict';

// https://github.com/metatech-university/Async-2024/blob/main/Tasks/Callbacks/3-async-problem.js

// Task: rewrite `total` function to be async with JavaScript timers
// Use `setInterval` and `clearInterval` to check next item each 1 second
// Calculations will be executed asynchronously because of timers
// Run `total` twice (as in example below) but in parallel
// Print debug output for each calculation step (each second)
//
// Hint: example output:
// { check: { item: { name: 'Laptop', price: 1500 } } }
// { check: { item: { name: 'Laptop', price: 1500 } } }
// { check: { item: { name: 'Keyboard', price: 100 } } }
// { check: { item: { name: 'Keyboard', price: 100 } } }
// { check: { item: { name: 'HDMI cable', price: 10 } } }
// { check: { item: { name: 'HDMI cable', price: 10 } } }
// { money: 1610 }
// { money: 1610 }

// const total = (items, callback) => {
//   let result = 0;
//   for (const item of items) {
//     console.log({ check: { item } });
//     if (item.price < 0) {
//       callback(new Error('Negative price is not allowed'));
//       return;
//     }
//     result += item.price;
//   }
//   callback(null, result);
// };

const INTERVAL = 1000;

const total = (items, callback) => {
  let result = 0;
  let i = 0;

  let timer = setInterval(() => {
    if (i >= items.length) {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      callback(null, result);
      return;
    }

    const item = items[i++];
    console.log({ check: { item } });

    if (item.price < 0) {
      callback(new Error('Negative price is not allowed'));
      clearInterval(timer);
      return;
    }

    result += item.price;
  }, 1000);
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

total(electronics, (error, money) => {
  if (error) console.error({ error });
  else console.log({ money });
});

total(electronics, (error, money) => {
  if (error) console.error({ error });
  else console.log({ money });
});
