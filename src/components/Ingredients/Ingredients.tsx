import './Ingredients.css';
import IIngredients from '../../types';


interface Props {
    ingredients: IIngredients[];
    addIngredient: (title: string) => void;
    removeIngredient: (title: string) => void;
}
const Ingredients = ({ingredients, addIngredient, removeIngredient}: Props) => {

    return (
        <div className={'ingredientsBlock'}>
            <h3 className={'ingredientsTitle'}>Ingredients</h3>
            {ingredients.map((ingredient) => (
                <div className={'ingredient'} key={ingredient.title}>
                    <button type={'button'} className={'ingredientBtn'} onClick={() => addIngredient(ingredient.title)}>
                        <img src={ingredient.image} alt={ingredient.title} className={'ingredientImg'}/>
                    </button>
                    <p>{ingredient.title}</p>
                    <p>x<b>{ingredient.count}</b></p>
                    {ingredient.count > 0 ? (
                        <button type="button" className="deleteBtn" onClick={() => removeIngredient(ingredient.title)}>
                            <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="bucket" style={{width: '30px'}}/>
                        </button>
                    ) : (
                        <p></p>
                    )}

                </div>
            ))}
        </div>
    );
};

export default Ingredients;