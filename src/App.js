import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import ListEditor from './pages/Home/editor';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Fragment>
          <CssBaseline />
          <AppHeader />
          <main className={classes.main}>
            <Route exact path="/" component={Home} />
            <Route exact path="/lists/:id" render={ListEditor} />
          </main>
        </Fragment>
      </ConnectedRouter>
    </Provider>
)};

export default withStyles(styles)(App);
