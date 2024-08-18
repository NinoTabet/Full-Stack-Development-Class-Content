require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

app.post("/create", async(req, res) => {

    try {
        
        let {content, hours, person} = req.body;

        if(!content || !hours){
            return res.status(400).json("Please provide all required values and try again.");
        }else if (!person){
            person = 'General';
        }

        const personSearch = await pool.query(
            "SELECT * FROM person WHERE name ILIKE ($1)",
            [person]
        );
        
        if(personSearch.rows.length === 0 ){
            return res.status(400).json("Person does not exist.");
        }

        await pool.query(
            "INSERT INTO task (content, hours, person) VALUES ($1, $2, $3)"
            ,[content, hours, person]
        );

        res.status(200).json('Task entered successfully!');

    } catch (err) {
        console.error(err.message);
        res.status(500).json("Internal Server Error");
    }
})


app.get("/search", async(req, res) => {

    try {
        
        const {taskId, person} = req.query;

        let searchResult;

        if (!taskId && !person){
            return res.status(400).json('Please provide a value before request submission');
        }else if (taskId && !person){
            searchResult = await pool.query(
                'SELECT * FROM task WHERE task_id = $1',
                [taskId]
            );
        }else if(!taskId && person){
            searchResult = await pool.query(
                'SELECT * FROM task WHERE person ILIKE $1',
                [person]
            );
        }else{
            searchResult = await pool.query(
                'SELECT * FROM task WHERE task_id = $1 and person ILIKE $2',
                [taskId, person]
            );
        }

        if(searchResult.rows.length === 0){
            return res.status(404).json('User or task id not found');
        }

        res.json(searchResult.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Internal Server Error"); 
    }

});

app.put("/edit", async(req, res) => {
    
    try {

        const {taskId, person} = req.body

        if(!taskId || !person){
            return res.status(400).json('user error');
        }

        const personSearch = await pool.query(
            'SELECT * FROM person WHERE name ILIKE $1',
            [person]
        );

        if (personSearch.rows.length === 0){
            return res.status(400).json('person not found')
        }

        await pool.query(
            'UPDATE task SET person = $1 WHERE task_id = $2',
            [person, taskId]
        );

        res.status(200).json('Task updated successfully');

    } catch (err) {
        console.error(err.message);
        res.status(500).json("Internal Server Error"); 
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});