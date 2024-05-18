import { Link } from "react-router-dom";
const Navbar = ({ className, onChange }) => {
  const onInput = (event) => {
    const value = event.target.value;
    onChange(value);
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${className}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/recipies"}>
            MuppasRecipies
          </Link>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onInput}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
