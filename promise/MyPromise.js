const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  status = PENDING;
  value = undefined;
  reason = undefined;
  successCallback = [];
  failCallback = [];
  resolve = (value) => {
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.value = value;
    //this.successCallback && this.successCallback(this.value);
    while (this.successCallback.length) {
      this.successCallback.shift()(this.value);
    }
  };
  reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.reason = reason;
    //this.failCallback && this.failCallback(this.reason);
    while (this.failCallback.length) {
      this.failCallback.shift()(this.reason);
    }
  };
  then(successCallback, failCallback) {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          let x = successCallback(this.value);
          resolvePromise(promise2, x, resolve, reject);
        }, 0);
      } else if (this.status === REJECTED) {
        failCallback(this.reason);
      } else {
        this.successCallback.push(successCallback);
        this.failCallback.push(failCallback);
      }
    });

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>')
    );
  }
  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

module.exports = MyPromise;
