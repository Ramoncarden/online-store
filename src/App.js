import './index.css';
import Hero from './components/Hero';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
