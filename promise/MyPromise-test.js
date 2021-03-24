const MyPromise = require('./MyPromise');

// let promise = new MyPromise((resolve, reject) => {
// setTimeout(() => {
//   resolve('success!');
// }, 2000);
// resolve('success!');
//   reject('fail!');
// });

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
// promise
//   .then(
//     (value) => {
//       console.log(value);
//       return 'aaa';
//     },
//     (reason) => {
//       console.log(reason);
//       return 10000;
//     }
//   )
//   .then((value) => {
//     console.log(value);
//   });
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
function p1() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(() => {
      resolve('p1');
    }, 2000);
  });
}

function p2() {
  return new MyPromise(function (resolve, reject) {
    resolve('p2');
  });
}

// MyPromise.all(['a', 'b', p1(), p2(), 'c']).then(function(result){
//   console.log('result: ', result);
// })

// MyPromise.resolve(100).then(value => console.log(value));
// MyPromise.resolve(p1()).then(value => console.log(value));

p2()
  .finally(() => {
    console.log('finally');
    return p1();
  })
  .then((value) => console.log(value));
