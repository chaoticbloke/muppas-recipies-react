import { useNavigate, useParams } from "react-router-dom";
import "./Recipe.css";

const RecipeDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = data.find((item) => item.id === id) || { id: 1 };
  console.log(recipe);
  const { id: recipeId, title, ingredients, method, cookingTime } = recipe;
  return (
    <div className="card-container">
      <div className="card mt-5 w-75 mx-2">
        <h5 className="card-header bg-secondary">
          {recipeId}. {title}
        </h5>
        <div className="card-body">
          <h5 className="card-title">Ingredients</h5>
          <div className="card-text">
            {ingredients.map((item) => item + ",")}
          </div>
          <div className="fs-2">Steps:</div>
          <div>
            {method.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </div>
          <span className="text-warning fs-5">Takes {cookingTime}</span>
        </div>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
