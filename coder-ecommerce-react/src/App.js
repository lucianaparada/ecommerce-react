import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { useState, useEffect, useContext } from 'react';
import CartContext from './context/CartContext';
import UseCartContext from './context/CartContext';
import ItemDetail from './components/ItemDetail';

function App() {

  return (
    <UseCartContext>
      <Router >
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:productId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>  
      </div>
    </Router>
    </UseCartContext>

    /*<Router >
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:productId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>  
      </div>
    </Router>*/
  );
}

export default App;
