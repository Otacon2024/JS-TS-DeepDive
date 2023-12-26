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

// Function
function greet(name) {
  console.log("Hello " + name);
}
greet("C17");

let greet2 = (name) => console.log("Hello " + name);
greet2("C18");
