const API = process.env.REACT_APP_API || 'http://localhost:3001';

export default {
  getGroceryLists: () => {
    const response = fetch(`${API}/groceryList`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response;
  },
  getGroceryListById: (groceryListId) => {
    const response = fetch(`${API}/groceryList/${groceryListId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response;
  },
  updateGroceryList: (token) => {
    const response = fetch(`${API}/groceryList`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response;
  },
  deleteGroceryList: (groceryListId) => {
    const response = fetch(`${API}/groceryList/${groceryListId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return response;
  }
}
