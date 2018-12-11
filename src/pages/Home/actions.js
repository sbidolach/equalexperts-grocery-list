import API from "../../helpers/api";
import { push } from 'react-router-redux'

export function dataHasErrored(bool: boolean) {
  return {
    type: "DATA_HAS_ERRORED",
    hasErrored: bool
  };
}

export function dataIsLoading(bool: boolean) {
  return {
    type: "DATA_IS_LOADING",
    isLoading: bool
  };
}

export function fetchGroceryListsSuccess(groceryLists: Object) {
  return {
    type: "FETCH_GROCERY_LISTS_SUCCESS",
    groceryLists
  };
}

export function getGroceryLists() {
  return dispatch => {
    dispatch(dataIsLoading(true));
    API.getGroceryLists()
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(fetchGroceryListsSuccess(responseJson));
        dispatch(dataIsLoading(false));
      })
      .catch((error) => {
        dispatch(dataHasErrored(true));
      });
  }
}

export function addGroceryList(groceryList) {
  return dispatch => {
    dispatch(dataIsLoading(true));
    API.addGroceryList(groceryList)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(push('/'));
        dispatch(dataIsLoading(false));
      })
      .catch((error) => {
        dispatch(dataHasErrored(true));
      });
  }
}

export function deleteGroceryList(groceryListId) {
  return dispatch => {
    dispatch(dataIsLoading(true));
    API.deleteGroceryList(groceryListId)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(fetchGroceryListsSuccess(responseJson));
        dispatch(dataIsLoading(false));
      })
      .catch((error) => {
        dispatch(dataHasErrored(true));
      });
  }
}
