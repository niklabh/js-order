import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Login from './screens/login';
import Orders from './screens/orders';
import Order from './screens/order';
import './App.css';
import './firebase';

function App() {
  return (
    <Router>
      {/* <MenuBar /> */}
      <Container>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
          <Route path="/order/:id">
            <Order/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
