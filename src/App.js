import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/Nav';
import Error from './components/Error';
import Users from './components/Users';

class App extends Component {

  render() {
    return (
        <Provider store={store()}>
      <BrowserRouter>
          <React.Fragment>
              <NavBar/>
              <br/>
              <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/about'} component={About}/>
              <Route exact path={'/contact'} component={Contact}/>
              <Route exact path={'/post'} component={Users}/>
              <Route component={Error}/>
              </Switch>
              <ToastContainer position="top-right"
                              autoClose={3000}
                              hideProgressBar
                              newestOnTop
                              closeOnClick
                              rtl={false}
                              pauseOnVisibilityChange
                              draggable
                              pauseOnHover />
          </React.Fragment>
      </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
