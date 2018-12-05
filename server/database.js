let mockDate = [
  {id: 1, title: 'Bakery and Bread', notes: 'Whole wheat bread, pita pockets and English muffins'},
  {id: 2, title: 'Meat and Seafood', notes: 'Skinless chicken or turkey breasts, Ground turkey or chicken, '},
  {id: 3, title: 'dsdasdas', notes: 'dasdasdasdas'}
];

module.exports = {
  get: () => mockDate,
  push: (newList) => mockDate.push(newList),
  save: (newDate) => mockDate = newDate
}
