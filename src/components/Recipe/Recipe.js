import "./Recipe.css";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const { id, title, ingredients, cookingTime } = recipe;
  return (
    <div className="card container w-75 mt-5">
      <h5 className="card-header">
        {id}. {title}
      </h5>
      <div className="card-body">
        <h5 className="card-title">Ingredients</h5>
        <div className="card-text">{ingredients.map((item) => item + ",")}</div>
        <div className="text-muted">Takes {cookingTime}</div>
        <Link to={`/recipies/${id}`} className="btn btn-secondary mt-5">
          See how to Cook
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
