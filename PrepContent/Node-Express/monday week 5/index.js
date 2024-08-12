const express = require("express");
const app = express();

app.use(express.json());

let movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "The Matrix",
    "Fight Club",
    "The Lord of the Rings: The Return of the King",
    "The Empire Strikes Back"
  ];

// get endpoint
app.get("/Search", async (req, res) => {
    
    try {
        const {movieName} = req.query;

        let search = []

        for(let i = 0; i < movies.length; i++){

            if(movies[i] === movieName){
                search.push(movies[i]);
            }

        }

        if (search.length === 0){
            res.status(404).json('Movie Not Found');
        } else {
            res.status(200).json(search);
        }
        
    } catch (err) {

        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
        
    }

});

app.post("/AddMovie", async (req, res) =>{

    try {
        const {newMovie} = req.body;
        
        movies.push(newMovie);

        res.status(200).json(movies);

    } catch (err) {
        console.error(err)
        res.status(500).message("Internal Server Error");
    }

});

app.put("/Edit", async(req,res) =>{

    try {

        const {oldMovie, newMovie} = req.body;

        for(let i = 0; i < movies.length; i++){

            if(oldMovie === movies[i]){
                movies.splice(i,1);
                movies.push(newMovie);
                movies.shift();
                break;
            }

        }
        res.status(200).json(movies);

    } catch (err) {
        console.error(err)
        res.status(500).message("Internal Server Error");
    }

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*

http://localhost:3000/Search?name=hello&age=10&city=paris

*/