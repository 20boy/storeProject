import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <h1>
        Error! This is obviously a problem you caused for Gods Sake. Fix It!
      </h1>
      <h2>
        Go back to <Link to="/">home </Link>
      </h2>
    </>
  );
};
