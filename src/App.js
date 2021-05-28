import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>

          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' component={ProductDetails} />
          <Route>404 NOT FOUND!</Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
