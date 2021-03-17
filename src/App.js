import React, { Component } from 'react';

import { Grommet, Box, ResponsiveContext } from 'grommet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar';

import CheckIn from './Pages/CheckIn';
import Home from './Pages/Home';
import Test from './Pages/Test';

const theme = {
  
  global: {
    colors: {
      brand: '#627433',
      icon: '#c4c993',
      'accent-1': '#f3acb6',
      'accent-2': '#414e22',
      'accent-4': '#dd6274',
    },
    font: {
      family: 'Montserrat',
      size: '18px',
      height: '20px',
    },
    
  },

  heading: {
    font: {
      family: 'Ma Shan Zheng',
    },
  },


};


class App extends Component {

  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box>
              <BrowserRouter>
                <Navbar></Navbar>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/checkin" component={CheckIn} />
                  <Route exact path="/test" component={Test} />
                </Switch>
              </BrowserRouter>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }

};


export default App;
