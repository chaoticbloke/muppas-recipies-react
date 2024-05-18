import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Home/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/Recipe/RecipeDetails";
import Home from "./components/Home/Home";

function App() {
  const [className] = useState("bg-info px-5");
  const [data, setData] = useState([]);
  const onChange = (value) => {
    if (value.trim() === "" || !value) {
      fetchData("./data/db.json");
    } else {
      const arr = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setData(arr);
    }
  };
  const fetchData = async () => {
    const response = await fetch("./data/db.json", {
      headers: {
        Accept: "application/json",
      },
    });
    const dataResponse = await response.json();
    setData(dataResponse.recipes);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Navbar className={className} onChange={onChange} />
      <Routes>
        <Route path="/recipies" element={<Home data={data} />} />
        <Route path="recipies/:id" element={<RecipeDetails data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
