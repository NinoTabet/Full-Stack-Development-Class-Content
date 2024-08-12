const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer',
    introduce: function(){
        console.log(`Hello! My name is ${this.name} my age is ${this.age} and ${this.occupation}`)
    }
};

export default person;