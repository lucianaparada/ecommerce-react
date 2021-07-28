import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
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
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
