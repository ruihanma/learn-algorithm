function* helloWorldGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}
var hw = helloWorldGenerator();
hw.next();
hw.next();
hw.next();
hw.next();

function* f() {
  console.log('执行了！')
}

var generator = f();

setTimeout(function () {
  generator.next()
}, 2000);