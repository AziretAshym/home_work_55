import './App.css'
import Ingredients from "./components/Ingredients/Ingredients.tsx";
import Burger from "./components/Burger/Burger.tsx";

import meatImage from "./assets/meat.png";
import cheeseImage from "./assets/cheese.png";
import saladImage from "./assets/salad.png";
import baconImage from "./assets/bacon.png";
import IIngredients from './types';
import {useState} from "react";


const ingredientsArray: IIngredients[]= [
    { title: 'Meat', image: meatImage, cost: 80, count: 0 },
    { title: 'Cheese', image: cheeseImage, cost: 50, count: 0 },
    { title: 'Salad', image: saladImage, cost: 10, count: 0 },
    { title: 'Bacon', image: baconImage, cost: 60, count: 0 }
];

const App = () => {
    const [ingredients, setIngredients] = useState<IIngredients[]>(ingredientsArray);

    const addIngredient = (title: string) => {
        setIngredients(prevState =>
            prevState.map(ingredient =>
                ingredient.title === title
                    ? { ...ingredient, count: ingredient.count + 1 }
                    : ingredient
            )
        );
    };

    const removeIngredient = (title: string) => {
        setIngredients(prevIngredients =>
            prevIngredients.map(ingredient =>
                ingredient.title === title && ingredient.count > 0
                    ? { ...ingredient, count: ingredient.count - 1 }
                    : ingredient
            )
        );
    };

  return (
    <>
      <div className="container">
        <Ingredients ingredients={ingredients} addIngredient={addIngredient} removeIngredient={removeIngredient}/>
        <Burger ingredients={ingredients}/>
      </div>
    </>
  )
};

export default App
