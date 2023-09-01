import classes from './SushiItem.module.css';
import SushiItemForm from './SushiItemForm';

const SushiItem = ({ name, description, price, id }) => {
    const priceString = `$${price.toFixed(2)}`;

    return (
        <li className={classes.sushi}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceString}</div>
            </div>
            <div>
                <SushiItemForm id={id} />
            </div>
        </li>
    )
}

export default SushiItem;