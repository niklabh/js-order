import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Style } from './style';
import { UserProvider } from './context/User';
import Home from './screens/Home';
import Login from './screens/Login';
import Orders from './screens/Orders';
import Order from './screens/Order';
import CreateOrder from './screens/CreateOrder';
import EditOrder from './screens/EditOrder';
import MenuBar from './components/MenuBar';
import './firebase';

function App() {
  return (
    <>
      <Style />
      <Router>
        <UserProvider>
          <MenuBar />
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="/order/:id">
                <Order />
              </Route>
              <Route path="/create-order">
                <CreateOrder />
              </Route>
              <Route path="/edit-order/:id">
                <EditOrder />
              </Route>
            </Switch>
          </Container>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
