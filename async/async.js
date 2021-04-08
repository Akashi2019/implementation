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
