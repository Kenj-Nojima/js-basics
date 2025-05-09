let message = "Hello World";
let name = "Kenji";
let age = "27";
let gender = "Male";


console.log (message, name, age, gender);

const PI = "3.14";
console.log (PI); 

/* DATA TYPES */

let messages = "This is string"; 
let ages = 21;
let isBoolean = true; 

let person = {
    names: "Kenji",
    age: 21,

};

console.log(person["names"], person["age"]);

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[2]);

let add = function(a,b){
    return a + b;
}

console.log(add(1, 2)); 

let prutas = ["Atis", "Mansanas", "Saging"];
console.log(prutas[1]);

let animal = {
    name: "lion",
    age: 3,
};

console.log(animal["age"], animal["name"])

//Arithmetic Operators

let x = 4;
let y = 3;
let w = "11"
let z = 11;

//Comparison Operators
let isGreater = y > x;
//let isEqual = w === z;
let isEqual = w !== z
console.log(isEqual);
    
//Logical Operators
//AND - &&
//OR - || 

//console.log(x > 6 && x < 7); //false
console.log(x > 8 || y < 2); //true

//Ternary Operators
let isHot= true;
condition = isHot?  "It is very Hot" : "No it is cold";

console.log(condition);

let grade = 90

const finalMark = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F"
console.log(finalMark)

//Destructuring

const objects = ["tables", "chair", "plates" , "spoons", 21 ];
const [furniture, chair, plates, spoons, count] = objects;


const persons = { 
    names: "Kenji Noji",
    kilo: 21,
    birthday: new Date(),
    status: "Single",
};

/*let names = persons.names;
let kilo = persons.kilo;
let birthday = persons.birthday;
let status = persons.status; */

const {names, kilo, birthday, status} = persons;

console.log (names, kilo, birthday, status);

/* spread Operators */

const body = ["head", "knees"];
const completeBody = [...body,"Toes", "Shoulder"];
console.log(completeBody);

const woman = {
    naame: "Naomi",
    aage: 21,
};

const contactPerson = {
    contactNumber: "0912345678",
    ...woman
};
console.log(contactPerson)

const numbers = [1,2,3];

function sum( a, b, c) {
    return a + b + c ;
}

console.log(sum(...numbers))

//Array Methods

let salad = ["Macaroni", "Nestle Cream", "Condense Milk", "Cheese"];

salad.push("kaong");

console.log(salad)