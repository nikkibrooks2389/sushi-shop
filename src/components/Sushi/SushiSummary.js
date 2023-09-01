import classes from './SushiSummary.module.css';

const SushiSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Sushi for you</h2>
            <p>
                Choose your favorite sushi from our broad selection and enjoy a delicious meal at home.
            </p>
            <p>
                All our sushi meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </section>
    );
};

export default SushiSummary;