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
  addGroceryList: (groceryList) => {
    const response = fetch(`${API}/groceryList`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(groceryList)
    });
    return response;
  },
  updateGroceryList: (groceryList) => {
    const response = fetch(`${API}/groceryList`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(groceryList)
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
