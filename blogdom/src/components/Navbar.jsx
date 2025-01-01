import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="navtitle">
        <h1>Koye BookStore</h1>
      </div>
      <div className="navlinks">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        
        <li>
          <NavLink to="/add">Add books</NavLink>
        </li>
      </div>
    </nav>
  );
};
