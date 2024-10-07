import React, { useState } from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import recipes from './data/Recipes';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="App">
      <header className="header">
        <h1>felix & neha culinary universe</h1>
      </header>
    <div className="content"> 
        <div className="left-panel">
          <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
        </div>
        <div className="right-panel">
          <RecipeDetails recipe={selectedRecipe} />
        </div>
      </div>
    </div>
  );
}

export default App;