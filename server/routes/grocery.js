let mockDatabase = require('../database');

module.exports = {
  getAllLists: function (req, res) {
    res.send(mockDatabase.get())
  },
  getList: function (req, res) {
    const { id } = req.params;
    const searchData = mockDatabase.get().find(list => list.id === parseInt(id));
    (searchData) ? res.send(searchData) : res.status(404).send('No Found');
  },
  addList: function (req, res) {
    const newList = req.body;
    mockDatabase.push(newList);
    res.send(mockDatabase.get());
  },
  updateList: function (req, res) {
    const updateList = req.body;
    const searchData = mockDatabase.get().find(list => list.id === updateList.id);
    searchData.title = updateList.title;
    searchData.notes = updateList.notes;
    res.send(mockDatabase.get())
  },
  deleteList: function (req, res) {
    const { id } = req.params;
    mockDatabase.save(mockDatabase.get().filter(list => list.id !== parseInt(id)));
    res.send(mockDatabase.get())
  }
}
