const MyPromise = require('./MyPromise')

let promise = new MyPromise((resolve, reject) => {
  resolve('success!');
  reject('fail!');
});

promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
