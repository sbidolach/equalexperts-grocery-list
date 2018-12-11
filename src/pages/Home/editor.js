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

import { addGroceryList } from "./actions";
import styles from "./styles";

class ListEditor extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
  }

  onSubmit(values) {
    const { addGroceryList } = this.props;
    if (!values.id) {
      addGroceryList(values);
    } else {
      // TODO
    }
  }

  validate(values) {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (!values.notes) {
      errors.notes = "Required";
    }
    return errors;
  }

  render() {
    const { classes, groceryList, history } = this.props;

    return (
      <Fragment>
        <Card className={classes.card}>
          <Form
            initialValues={groceryList}
            onSubmit={this.onSubmit}
            validate={this.validate}>
            {({ handleSubmit, pristine, submitting }) => (
              <form onSubmit={handleSubmit}>
                <CardContent className={classes.cardContent}>
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
                  <Button size="small" color="primary" type="submit" disabled={pristine || submitting}>Save</Button>
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
		addGroceryList: (groceryList) => dispatch(addGroceryList(groceryList))
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
