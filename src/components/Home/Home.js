import Recipe from "../Recipe/Recipe";
const Home = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((recipe) => (
          <div key={recipe.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <Recipe recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
