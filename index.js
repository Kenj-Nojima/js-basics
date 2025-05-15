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
//push method
let salad = ["Macaroni", "Nestle Cream", "Condense Milk", "Cheese"];

salad.push("kaong");

console.log(salad)

//pop method

let salads = ["Macaroni", "Nestle Cream", "Condense Milk", "Cheese"];

salad.pop();

console.log(salads)

//splice method

const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");

console.log(months);
months.splice(4, 1, "May"); 
console.log(months);

//Array Iterators

let students = [{
    id: 1,
    f_name: "Alex",
    l_name: "B",
    gender: "M",
    married: false,
    age: 31,
    paid: 0,
    courses: ["Javascript","React",],
},
{
    id: 2,
    f_name: "Ibrahim",
    l_name: "M",
    gender: "M",
    married: true,
    age: 28,
    paid: 150,
    courses: ["Javascript","PWA",],
 },
 {
    id: 3,
    f_name: "Rubi",
    l_name: "S",
    gender: "F",
    married: false,
    age: 29,
    paid: 350,
    courses: ["Blogging","React","UX"],
},
];

/*const newStudents = students.map((students, index) => {
    return students;
})

console.log(newStudents)*/

const newStudents = students.filter((students, index) => students.paid > 25)
console.log(newStudents); 

let hasStudentBelow30 = students.some((students, index) => students.age < 30);
console.log(hasStudentBelow30)

let studentAbove30  = students.find((student, index) => student.age > 30)
console.log(studentAbove30)

//reduce method

let totalCost = students.reduce((accumulator, students, currentIndex, ) =>
    {
    accumulator = accumulator + students.paid;
    return accumulator
    },
    0
);
console.log(totalCost);

//promises

let promise = new Promise((resolve, reject) => {
    const i = "Promise";
    i === "Promisesds" ? resolve() : reject();

});

promise.then(() => console.log("Promise was resolved")) .catch(() => console.log("Promise was rejected!"))