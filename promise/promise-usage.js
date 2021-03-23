let promise = new Promise((resolve, reject) => {
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

promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);

promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);

promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
