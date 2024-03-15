// Task: rewrite function to return result into sync callback:
// https://github.com/metatech-university/Async-2024/blob/main/Tasks/Callbacks/1-sync-problem.js

// Change signature to: (items, callback(result))
const total = (items) => {
  let result = 0;
  for (const item of items) {
    result += item.price;
  }
  return result;
};

const total2 = (items, callback) => {
  let result = 0;
  for (const item of items) {
    result += item.price;
  }

  callback(result);
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

// Use new signature total(electronics, (money) => ...)
// const money = total(electronics);
// console.log({ money });

const fn = (money) => {
  console.log({money});
}
total2(electronics, fn);