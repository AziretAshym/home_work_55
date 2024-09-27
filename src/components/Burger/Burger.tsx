import './Burger.css';
import {IIngredients} from "../../types";

interface Props {
    ingredients: IIngredients[];
}

const Burger = ({ingredients}: Props) => {

    const totalPrice = ingredients.reduce((acc, ingredient) => acc + (ingredient.count * ingredient.cost), 30);
    return (
        <div className="Burger">
            <h3 style={{fontSize: '24px', textAlign: 'center'}}>Burger</h3>
            <p>Total price: <b>{totalPrice}</b></p>
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map((ingredient) => {
                if (ingredient.count > 0) {
                    return <div key={ingredient.title} className={ingredient.title}></div>
                }
            })}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;