const car1 = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: function(x){
        console.log("hello world: " + x)
    }
};

const car2 = {
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    color: 'Blue'
};

export { car1, car2 };