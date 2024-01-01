// Object
let person = {
  name: "Akira",
  age: 20,
};
// Dot Notation
person.name = "Mary";
// Bracket Notation
let selection = "name";
person[selection] = "John";

// Array
let selectedColors = ["red", "blue"];
selectedColors[3] = 1;
console.log(selectedColors.length);

// Function performing a task
function greet(name, sisterName) {
  console.log("Hello " + name + " and " + sisterName);
}
greet("C17", "C18");
let greet2 = (name) => console.log("Hello " + name);
greet2("C16");

// Function calculating a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);

console.log(square(4));
