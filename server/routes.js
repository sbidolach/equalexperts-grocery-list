const grocery = require('./routes/grocery');

module.exports.setup = (app) => {

  app.get("/", (req, res) => res.json({message: "Welcome to our Grocery List App!"}));

  app.route('/groceryList')
      .get(grocery.getAllLists)
      .post(grocery.addList)
      .put(grocery.updateList);
  app.route('/groceryList/:id')
      .get(grocery.getList)
      .delete(grocery.deleteList)
}
