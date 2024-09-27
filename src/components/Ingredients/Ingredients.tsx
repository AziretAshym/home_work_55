import './Ingredients.css';
import meatImage from '../../assets/meat.png';
import cheeseImage from '../../assets/cheese.png';
import saladImage from '../../assets/salad.png';
import baconImage from '../../assets/bacon.png';
import IIngredients from '../../types';

const ingredientsArray: IIngredients[]= [
    { title: 'Meat', image: meatImage, cost: 80, count: 0 },
    { title: 'Cheese', image: cheeseImage, cost: 50, count: 0 },
    { title: 'Salad', image: saladImage, cost: 10, count: 0 },
    { title: 'Bacon', image: baconImage, cost: 60, count: 0 }
];


const Ingredients = () => {
    return (
        <div className={'ingredientsBlock'}>
            <h3 className={'ingredientsTitle'}>Ingredients</h3>
            {ingredientsArray.map((ingredient) => (
                <div className={'ingredient'} key={ingredient.title}>
                    <button type={'button'} className={'ingredientBtn'}>
                        <img src={ingredient.image} alt={ingredient.title} className={'ingredientImg'}/>
                    </button>
                    <p>{ingredient.title}</p>
                    <b>x{ingredient.count}</b>
                    <button type={'button'} className={'deleteBtn'}>
                        <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="bucket"
                             style={{width: '30px'}}/>
                    </button>

                </div>
            ))}
        </div>
    );
};

export default Ingredients;