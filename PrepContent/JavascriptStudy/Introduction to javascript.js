/* 
    Variables
    Datatypes{number(float/int), string, boolean, null, object}
    console logging
    Arrays / Array object
    Loops
    Functions
    Parameters / Hierarchy (code is read up to down + example (global and local variables))
    If statements
*/

// Variables
const x = 1; // constant can't be changed after being created

let y = 2; // can be changed to any datatype
    y=3;

var z = 3; // can be changed to any datatype AND can be accessed at any point in the document which can lead to unexpected behaviour

const xx = 1; // semicolon
const xy = 1 // no semicolon

// Datatypes
const a = 1; // int
const aa = 1.1; // float
const b = "Hello World"; // string
const c = false; // boolean false
const d = true; // boolean true
const e = null; // null value
// object
let data = { //response.data.fact
    fact: 'cats have 9 lives',
    age: 25,
    isTeacher: true,
    address: {
        street: '123 Hello St',
        city: 'Somewhere'
    }
};

// referencing objects values 
console.log(object.name);
console.log(object.address.street);

// arrays
const array = ['woof','meow','oink',100,true];

// how to call a specific element of an array (indexes)
console.log(array[1]);

// loops
for (let i = 0; i<10; i++){
    console.log(i);
}

while (x = true){

}

// parameters and functions
function hello(x) {
    console.log(x);
}

function main() {
    const x = 1;
    hello(x);
}
  
main();


if(x=1){
    console.log("x is 1!!");
}else if (x=10){
    console.log("x is 10!");
}else{
    console.log("x is NOT 1!");
}

if (x=5){
    console.log(55);
}
if (x=10){
    console.log(55);
}

if ((x=5)||(x=10)){
    console.log(55);
}

if((x=5) & (x=10)){
    console.log("x is 5 and 10");
}

let q = 5;


console.log("Hello world! "+q);

let o = ("hello world! " + q);

console.log(o); // hello world! 5

const p = q+10;
console.log(p); // 15