import React, {Component, Fragment} from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  withStyles,
  Typography,
  Fab,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import { orderBy } from 'lodash';
import { compose } from 'recompose';
import { connect } from "react-redux";

import { getGroceryLists, deleteGroceryList } from "./actions";
import styles from "./styles";

class HomePage extends Component {

  componentDidMount() {
    this.props.getGroceryLists();
  }

  render() {
    const { classes, groceryLists, isLoading } = this.props;

    return (
      <Fragment>
        <Typography variant="display1"><span>Grocery List</span></Typography>
        {groceryLists.length > 0 ? (
          <Paper elevation={1} className={classes.posts}>
            <List>
              {orderBy(groceryLists, ['notes', 'title'], ['desc', 'asc']).map(groceryList => (
                <ListItem key={groceryList.id} button component={Link} to={`/lists/${groceryList.id}`}>
                  <ListItemText
                    primary={groceryList.title}
                    secondary={groceryList.notes && `${groceryList.notes}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.props.deleteGroceryList(groceryList.id)} color="inherit">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          !isLoading && <Typography variant="subheading">No grocery lists to display</Typography>
        )}
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fab}
          component={Link}
          to="/lists/new"
        >
          <AddIcon />
        </Fab>
      </Fragment>
    );
  }

}

function bindAction(dispatch) {
  return {
    getGroceryLists: () => dispatch(getGroceryLists()),
    deleteGroceryList: (groceryList) => dispatch(deleteGroceryList(groceryList))
  };
}
const mapStateToProps = state => ({
  groceryLists: state.homeReducer.groceryLists,
  hasErrored: state.homeReducer.hasErrored,
  isLoading: state.homeReducer.isLoading
});

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, bindAction)
)(HomePage);
