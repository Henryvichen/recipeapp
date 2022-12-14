import React, {useState} from "react";
import RecipeData from "./RecipeData.js"
import RecipeView from './RecipeView';

function RecipeList({recipes, deleteRecipe}) {
  
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  
  // TODO: Create at least one additional component that is used by this component.
  // ask michael
  
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  // reference previous state management

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            
            <th style={{width:"10%"}}>Name</th>
            <th style={{width:"10%"}}>Cuisine</th>
            <th style={{width:"10%"}}>Photo</th>
            <th style={{width:"30%"}}>Ingredients</th>
            <th style={{width:"30%"}}>Preparation</th>
            <th style={{width:"10%"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeView 
              key={index} 
              deleteRecipe={() => deleteRecipe(index)} 
              recipe={recipe}
              />))}
        </tbody>
      </table>
      
     
    </div>
  );
}

export default RecipeList;
 