import './index.css';
import Hero from './components/Hero';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails';
import ProductsNav from './components/ProductsNav';
import Cart from './components/Cart';
import Confirmation from './components/Confirmation';
import NotFound from './components/NotFound';

function App() {
  const [ cartItems, setCartItems ] = useState([])

  /** onAddToCart 
   * takes a product and checks the cartItems state to find a matching id
   *  if found will increment the qty of the item in the state and if not found
   * will create add item to state and set qty to 1.
   */
  const onAddToCart = (product) => {
    const exists = cartItems.find(x => x.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x))
    } else {
      setCartItems([ ...cartItems, { ...product, qty: 1 } ])
    }
  }

  /** onRemoveCartItem
   * Same as onAddToCart but this function will decrease item qty from state by 1
   * or remove item from state if qty is 1.
   */
  const onRemoveCartItem = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x))
    }
  }

  const resetCart = () => {
    setCartItems([]);
  }

  const removeSingleItem = (product) => {
    const exists = cartItems.filter((x) => x.id !== product.id);
    setCartItems(exists);
  }

  const checkout = () => {
    if (cartItems.length > 0) {
      setCartItems([]);
    }
  }

  const getConfirmationNumber = () => {
    return Math.floor(Math.random() * 1000000000);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/products">
          <ProductsNav countCartItems={cartItems.length} />
          <ProductList />
        </Route>
        <Route path="/products/:id">
          <ProductsNav cartItems={setCartItems} countCartItems={cartItems.length} />
          <ProductDetails onAddToCart={onAddToCart} cartItems={cartItems} />
        </Route>
        <Route path="/cart">
          <ProductsNav countCartItems={cartItems.length} />
          <Cart
            onAddToCart={onAddToCart}
            cartItems={cartItems}
            onRemoveCartItem={onRemoveCartItem}
            resetCart={resetCart}
            removeSingleItem={removeSingleItem}
            checkout={checkout}
          />
        </Route>
        <Route path="/confirmation">
          <ProductsNav countCartItems={cartItems.length} />
          <Confirmation getConfirmationNumber={getConfirmationNumber} />
        </Route>
        <Route path="/*">
          <ProductsNav />
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
