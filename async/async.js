function* read() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  yield 3;
}

let it = read();
it.next();
it.next();
it.next();


//co
function co(it){
  return new Promise((resolve, reject) => {
    function next(data){
      let {value, done} = it.next(data);
      if(done){
        resolve(value);
      }else{
        Promise.resolve(value).then(next, reject)
      }
    }
    next();
  })
}