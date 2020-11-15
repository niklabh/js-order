import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Style } from './style';
import Login from './screens/login';
import Orders from './screens/orders';
import Order from './screens/order';
import './firebase';

function App() {
  return (
    <>
      <Style />
      <Router>
        {/* <MenuBar /> */}
        <Container>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/order/:id">
              <Order />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
