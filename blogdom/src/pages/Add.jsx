import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import kewkew from "../assets/question.png";

export const Add = () => {
  const navigate = useNavigate();

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
      await axios.post("http://localhost:7000/books", input);
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formCon">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add New book</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="title"
          name="title"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="desription"
          name="description"
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="price"
          name="price"
        />
        <label htmlFor="image" className="fCover">
          <img src={kewkew} alt="where" />
          Cover
        </label>
        <input
          onChange={handleChange}
          type="file"
          placeholder="cover"
          name="cover"
          className="fileOne"
          id="image"
        />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};
