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
import ProtectedRoute from './components/ProtectedRoute';
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
              <Route exact path="/orders/:id">
                <ProtectedRoute component={Order} />
              </Route>
              <Route exact path="/orders">
                <ProtectedRoute component={Orders} />
              </Route>
              <Route exact path="/create-order">
                <ProtectedRoute component={CreateOrder} />
              </Route>
              <Route exact path="/edit-order/:id">
                <ProtectedRoute component={EditOrder} />
              </Route>
            </Switch>
          </Container>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
