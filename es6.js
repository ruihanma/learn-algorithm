function* foo(x) {
  var y = 2 * (yield x + 10);
  var z = yield y / 4;
  return x + y + z;
}
var a = foo(5);

console.log(a.next()); // 第一次会执行yield括号内的
console.log(a.next(4)); // 传值会重置上一次的yield的值 即是yield后面的数据
console.log(a.next(3));