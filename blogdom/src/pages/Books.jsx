import { useEffect, useState } from "react";
import axios from "axios";
import { Bok } from "../components/Bok";
import { Link } from "react-router-dom";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [eroor, setEroor] = useState("");

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:7000/books");
        setBooks(res.data);
      } catch (err) {
        setEroor(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    const makeSure = prompt("Type Yes to delete");
    try {
      makeSure !== "Yes"
        ? id == null
        : await axios.delete("http://localhost:7000/books/" + id);
      window.location.reload();
    } catch (err) {
      setEroor(err);
    }
  };
  return (
    <div className="BooksPage">
      {!eroor && (
        <div className="booksCon">
          {books.map((book) => (
            <Bok book={book} key={book.id} handleDelete={handleDelete} />
          ))}
        </div>
      )}{" "}
      <button className="addButton">
        <Link to="/add">ADD NEW BOOK</Link>
      </button>
    </div>
  );
};
