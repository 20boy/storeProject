import express from "express";
import mysql from "mysql";
import cors from "cors"

const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookstest"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.json("this is the home page and its connected"))

app.get("/books", (req, res) => {
    const query = "SELECT * FROM books"
    db.query(query, (err, data) => {
        err ? res.json("Can't Get Books") : res.json(data)
    })
})

app.post("/books", (req, res) => {
    const query = "INSERT INTO books (`title`, `description`, `cover`, `Price`) VALUES (?)";
    const values = [req.body.title, req.body.description, req.body.cover, req.body.price]

    db.query(query, [values], (err, data) => {
        err ? res.json(err) : res.json("Books created now")
    })
})

app.delete("/books/:id", (req, res) => {
    const bookID = req.params.id;
    const query = "DELETE FROM books WHERE id = ?";

    db.query(query, [bookID], (err, data) => {
        err ? res.json(err) : res.json("You deleted the Books")
    })

})

app.put("/books/:id", (req, res) => {
    const bookID = req.params.id;
    const query = "UPDATE books SET `title` = ?, `description` = ?, `cover` = ?, `Price` = ? WHERE id = ?";
    const values = [req.body.title, req.body.description, req.body.cover, req.body.price]

    db.query(query, [...values, bookID], (err, data) => {
        err ? res.json(err) : res.json("You Updated the Books Succesfully")
    })
})


app.listen(7000)