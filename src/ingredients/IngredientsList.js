import React from "react";
import { Link } from "react-router-dom";
import { IngredientsListItems } from "./IngredientsListItems";

export const IngredientsList = ({ isLoading, ingredients, onDelete }) => (
    <div className="list-container">
        <h1>Ingredients</h1>
        {isLoading 
            ? <p>Loading...</p>
            : ingredients.map(ingredient => (
                <IngredientsListItems
                    key={ingredient.name}
                    ingredient={ingredient}
                    onDelete={onDelete}
                />
            ))
        }

        <Link to="/add-ingredient">
            <button className="space-before">+ Add Ingredients</button>
        </Link>
    </div>

)