const MyPromise = require('./MyPromise');

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success!');
  }, 2000);
  // reject('fail!');
});

// promise.then(
//   (value) => {
//     setTimeout(() => {
//       console.log(value);
//     }, 2000);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

// promise.then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

// let p1 = promise.then(
//   (value) => {
//     console.log(value);
//     return p1;
//   },
//   (reason) => {
//     console.log(reason);
//   }
// )
// p1.then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.log(reason.message);
//   }
// );

// function other(){
//   return new MyPromise((resolve, reject) => {
//     resolve('other');
//   })
// }
promise
  .then(
    (value) => {
      console.log(value);
      return 'aaa';
    },
    (reason) => {
      console.log(reason);
      return 10000;
    }
  )
  .then((value) => {
    console.log(value);
  });
// promise
//   .then()
//   .then()
//   .then(
//     (value) => {
//       console.log(value);
//     },
//     (reason) => {
//       console.log(reason);
//     }
//   );
