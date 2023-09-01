import classes from './AvailableSushi.module.css';
import Card from '../UI/Card';
import SushiItem from './SushiItem/SushiItem';

const AvailableSushi = () => {

    const DUMMY_MEALS = [
        {
            id: 's1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
        },
        {
            id: 's2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
        },
        {
            id: 's3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: 's4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
    ];

    const sushiList = DUMMY_MEALS.map(sushi => <SushiItem key={sushi.id} name={sushi.name} description={sushi.description} price={sushi.price} />);

    return (
        <section className={classes.sushi}>
            <Card>
                <ul>
                    {sushiList}
                </ul>
            </Card>
        </section>
    )
};

export default AvailableSushi;