import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ThemeContext from "../../../contexts/ThemeContext";
const Navbar = ({ className, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  let { theme, toggleTheme } = useContext(ThemeContext);
  const onInput = (event) => {
    const value = event.target.value;
    onChange(value);
  };
  const handleToggle = ($event) => {
    const value = $event.target.checked;
    if (value) {
      toggleTheme("bg-light");
      document.body.style.background = "#000";
    } else {
      toggleTheme("bg-dark");
      document.body.style.background = "#ccc";
    }
    setIsChecked($event.target.checked);
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${className}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/recipies"}>
            MuppasRecipies
          </Link>
          <div className="form-check form-switch">
            <input
              className={`form-check-input ${theme}`}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={handleToggle}
              checked={isChecked}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Mode
            </label>
          </div>

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
