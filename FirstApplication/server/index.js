require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

app.get("/search", async (req, res) => {
    try {
        
        const bookTitle = req.query.title;

        const bookSearch = await pool.query(
            'SELECT * FROM books WHERE title ILIKE ($1)',
            [`%${bookTitle}%`]
        );

        if(bookSearch.rows.length === 0){
            return res.status(404).json('Book not found');
        }

        res.json(bookSearch.rows);

    } catch (err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }
});

app.post("/create", async(req, res) => {

    try {

        const { title, author } = req.body;

        if (!title || !author){
            return res.status(400).json('Please provide both a title and author.')
        }

        const bookSearch = await pool.query(
            "SELECT * FROM books WHERE title ILIKE $1 AND author ILIKE $2",
            [title, author]
        );

        if (bookSearch.rows.length > 0){
            return res.status(400).json('Book already exists in the database. Please look to add a different book.')
        }

        await pool.query(
            "INSERT INTO books (title, author) VALUES ($1, $2)",
            [title, author]
        );

        res.status(200).json({ message: 'Book created successfully.' });
        
    } catch (err) {
        res.status(500).json('Internal Server Error');
    }

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});