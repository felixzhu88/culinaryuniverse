import React, { useState } from "react";

const RecipeList = ({recipes, onSelectRecipe}) => {
    // state to store search term 
    const [searchTerm, setSearchTerm] = useState("");

    // function to handle search input change
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }; 

    // filter recipes based on what you searched
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // normalize search terms
    const normalizeText = (text) => {
        return text
          .toLowerCase() // Make it lowercase for case insensitivity
    };

    return (
        
        <div>
            {/* the following code adds search bar*/}
            <input
                type="text"
                placeholder="Search for a craving!"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />
            {/* show only the filtered recipes */}
            {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
            <div key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
                <h2>{recipe.name}</h2>
            </div>
        ))): 
        (
        <p>No recipes found</p> // Message when no recipes match the search
      )}
        </div>
    );
};

export default RecipeList;
