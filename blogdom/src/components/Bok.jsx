/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const Bok = ({ book, handleDelete }) => {
  return (
    <div className="BokCon">
      <div className="bookImg">
        {book.cover && <img src={book.cover} alt="" />}
      </div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>{book.price}</p>
      <div className="ButtonCon">
        <button className="deleteButton" onClick={() => handleDelete(book.id)}>
          DELETE
        </button>
        <button className="updateButton">
          <Link to={`/update/${book.id}`}>Update</Link>
        </button>
      </div>
    </div>
  );
};
