const initialState = {
  isLoading: true,
  hasErrored: false,
  groceryLists: []
};

export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case "DATA_HAS_ERRORED":
      return { ...state, hasErrored: action.hasErrored };
    case "DATA_IS_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "FETCH_GROCERY_LISTS_SUCCESS":
      return { ...state, groceryLists: action.groceryLists };
    default:
      return state;
  }
}
