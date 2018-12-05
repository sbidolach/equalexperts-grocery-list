import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField
} from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from "react-redux";
import { Form, Field } from 'react-final-form';

import { saveGroceryList } from "./actions";
import styles from "./styles";

class ListEditor extends Component {

  componentDidMount() {
  }

  render() {
    const { classes, groceryList, saveGroceryList, history } = this.props;

    return (
      <Fragment>
        <Card className={classes.card}>
          <Form initialValues={groceryList} onSubmit={saveGroceryList}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <CardContent className={classes.cardContent}>
                  <Field name="id">
                    {({ input }) => <TextField label="Id" autoFocus {...input} />}
                  </Field>
                  <Field name="title">
                    {({ input }) => <TextField className={classes.marginTop} label="Title" autoFocus {...input} />}
                  </Field>
                  <Field name="notes">
                    {({ input }) => (
                      <TextField
                        className={classes.marginTop}
                        label="Notes"
                        multiline
                        rows={4}
                        {...input}
                      />
                    )}
                  </Field>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" type="submit">Save</Button>
                  <Button size="small" onClick={() => history.goBack()}>Cancel</Button>
                </CardActions>
              </form>
            )}
          </Form>
        </Card>
      </Fragment>
    );
  }

}

function bindAction(dispatch) {
  return {
		saveGroceryList: (groceryList) => dispatch(saveGroceryList(groceryList))
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
)(ListEditor);
