// Dashboard.js

import React, { useState } from "react";
import { appId, appkeys } from "../tokenData";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [expandedIngredients, setExpandedIngredients] = useState({});

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?q=${searchQuery}&type=public&app_id=${appId}&app_key=${appkeys}`
      );
      if (response.ok) {
        const data = await response.json();
        setRecipes(data.hits);
        const initialExpandedState = {};
        data.hits.forEach((recipe, index) => {
          initialExpandedState[index] = false;
        });
        setExpandedIngredients(initialExpandedState);
      } else {
        console.error("Error fetching recipes");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const toggleExpand = (index) => {
    setExpandedIngredients({
      ...expandedIngredients,
      [index]: !expandedIngredients[index],
    });
  };

  return (
    <div className="dashboard">
      <h2>Welcome to Food Recipe App</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <div className="recipe-details">
              <h3>{recipe.recipe.label}</h3>
              <p>Calories: {Math.round(recipe.recipe.calories)}</p>
              <p>Ingredients:</p>
              <ul>
                {recipe.recipe.ingredientLines.map((ingredient, i) => (
                  <li
                    key={i}
                    style={{
                      display:
                        i < 4 || expandedIngredients[index] ? "block" : "none",
                    }}
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
              {recipe.recipe.ingredientLines.length > 4 && (
                <button
                  className="more-button"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedIngredients[index] ? "View Less" : "View More"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
