function* foo(x) {
  var y = 2 * (yield x + 10);
  var z = yield y / 4;
  return x + y + z;
}

var a = foo(5);

console.log(a.next()); // 第一次会执行yield括号内的
console.log(a.next(4)); // 传值会重置上一次的yield的值 即是yield后面的数据
console.log(a.next(3));

function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (; ;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

// for (let n of fibonacci()) {
//   if (n > 1000) break;
//   console.log(n);
// }

// 为原生js对象添加iterator接口
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj);
  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`);
}

let myObject = {
  foo: 4,
  set bar(value) {
    return this.foo = value + 10;
  },
};

let myReceiverObject = {
  foo: 0,
};

Reflect.set(myObject, 'bar', 1, myReceiverObject);

// console.log(myObject.foo);
// console.log(myReceiverObject.foo);


// TODO 不懂
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

// function set(target, key, value, receiver) {
//   const result = Reflect.set(target, key, value, receiver);
//   queuedObservers.forEach(observer => observer());
//   return result;
// }

var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}