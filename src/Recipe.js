import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title,calories, image,ingredients }) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ul>Ingredients:
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt=""/>
            {/* <a href={url} target="_blank" rel="noopener noreferrer">Read More</a> */}
        </div>
    );
};
export default Recipe;