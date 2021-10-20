import Navigation from './navigation/Navigation';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Adduser from './components/AddUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';
import { Provider } from 'react-redux'
import store from '../src/redux/store'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Switch>
          <Provider store={store}>
            <Route exact path="/" component={ListUser} />
            <Route exact path="/addUser" component={Adduser} />
            <Route exact path="/editUser/:userId" component={EditUser} />
          </Provider>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
