let person = {
  name: "Akira",
  age: 20,
};

// Dot Notation
person.name = "Mary";

// Bracket Notation
let selection = "name";
person[selection] = "John";

console.log(person);
console.log(person.name);
