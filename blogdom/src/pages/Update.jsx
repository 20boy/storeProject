import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const [input, setInput] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:7000/books/" + bookId, input);
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formCon">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Update the book</h1>

        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Description"
          name="description"
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Price"
          name="price"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Cover"
          name="cover"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};
