import React from 'react';

const RecipeDetails = ({recipe}) => {
    if (!recipe) return <p>Select a recipe to see the details.</p>;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <h4>for {recipe.makes}</h4>
            <h4>ingredients</h4>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>instructions</h4>
            <ol>
                {recipe.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDetails;