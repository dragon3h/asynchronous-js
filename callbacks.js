const add = (a, b) => a + b;
const res = add(2, 5);
console.log('res: ', res);

const typeText = (str) => {
  console.log('typed text: ', str);
}

const sum = (txt, callback) => callback(txt);
const test = sum('romr', typeText);
console.log('test: ', test);