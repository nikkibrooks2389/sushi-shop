import { useState } from "react";

import Header from "./components/Layout/Header";
import Sushi from "./components/Sushi/Sushi";
import Cart from "./components/Cart/Cart";


const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Sushi />
      </main>
    </>
  );
}

export default App;