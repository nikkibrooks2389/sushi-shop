import { useContext } from "react";

import classes from './SushiItem.module.css';
import SushiItemForm from './SushiItemForm';
import CartContext from '../../../store/cart-context';

const SushiItem = (props) => {

    const cartCtx = useContext(CartContext);

    const priceString = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={classes.sushi}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{priceString}</div>
            </div>
            <div>
                <SushiItemForm id={props.id} onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    )
}

export default SushiItem;