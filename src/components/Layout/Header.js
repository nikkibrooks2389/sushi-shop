import sushiImage from '../../assets/sushi-header.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
    return (
        <>
            <header className={classes.header}>
                <h1>The Sushi Shop</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={sushiImage} alt="sushi" />
            </div>
        </>
    );
};

export default Header;