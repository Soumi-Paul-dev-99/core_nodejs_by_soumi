//callback function

function greet(name) {
  console.log(`hello ${name}`);
}
function greetValue(greetfn) {
  const name = "soumi";
  greetfn(name);
}
greetValue(greet);

///synchronous callback

let numbers = [1, 5, 78, 6, 4];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.filter((n) => n % 2 === 0));
console.log(numbers.map((n) => n / 2));

//achronous callback in browser

function callback() {
  document.getElementById("demo").innerHTML = "hello";
}
document.getElementById("btn").addEventListener("click", callback);
