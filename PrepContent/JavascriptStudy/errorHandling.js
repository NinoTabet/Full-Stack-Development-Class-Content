const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer',
    introduce: function(){
        console.log(`Hello! My name is ${this.name} my age is ${this.age} and ${this.occupation}`)
    }
};

export default person;

// ---------------------------------------------------

const car1 = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Red'
};

const car2 = {
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    color: 'Blue'
};

export { car1, car2 };

// --------------–--------------–--------------–--------------–--------------–--------------–

export function createPerson (name, age, occupation) {

    return{
        name: name,
        age: age,
        occupation: occupation
    }
}

import createPerson from './createPerson.js';

const localCharacter = createPerson('John Doe', 30, 'Software Developer');


try {
    let result = 10 / 0; // ---
    console.log(result); // ---
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
}

try {
    let result = divide(10, 2);
    console.log(result);
} catch (error) {
    console.error(error.message); // ---
} finally { // ---
    console.log('This will always be executed');
}




// const x = Math.floor(Math.random() )
