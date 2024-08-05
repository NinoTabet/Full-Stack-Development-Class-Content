const express = require("express");
const app = express();

app.use(express.json());

// only 1 time

// get endpoint
app.get("/Search", async (req, res) => {
    
    try {

        const {name, age, city} = req.query;

        const x = `Hello! My name is ${name}. I am ${age} years old and I live in ${city}.`

        res.status(200).json(x);
        
    } catch (err) {

        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
        
    }

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





/*

http://localhost:3000/Search?name=hello&age=10&city=paris

*/