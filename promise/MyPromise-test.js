const MyPromise = require('./MyPromise');

let promise = new MyPromise((resolve, reject) => {
  resolve('success!');
  reject('fail!');
});

promise.then(
  (value) => {
    setTimeout(() => {
      console.log(value);
    }, 2000);
  },
  (reason) => {
    console.log(reason);
  }
);
