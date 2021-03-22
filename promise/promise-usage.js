let promise = new Promise((resolve, reject) => {
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
