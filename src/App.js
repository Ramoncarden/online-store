import './index.css';
import Hero from './components/Hero';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails';
import ProductsNav from './components/ProductsNav';
import Cart from './components/Cart';

function App() {
  const [ cartItems, setCartItems ] = useState([])

  const onAddToCart = (product) => {
    const exists = cartItems.find(x => x.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x))
    } else {
      setCartItems([ ...cartItems, { ...product, qty: 1 } ])
    }
  }

  const onRemoveCartItem = () => {
    console.log("item removed");
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/products">
            <ProductsNav />
            <ProductList />
          </Route>
          <Route path="/products/:id">
            <ProductsNav />
            <ProductDetails onAddToCart={onAddToCart} cartItems={cartItems} />
          </Route>
          <Route path="/cart">
            <ProductsNav />
            <Cart onAddToCart={onAddToCart} cartItems={cartItems} onRemoveCartItem={onRemoveCartItem} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
