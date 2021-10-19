import './index.css';
import Hero from './components/Hero';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
