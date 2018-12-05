const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const mockDatabase = require('../database');

const should = chai.should();

chai.use(chaiHttp);

describe('Grocery Lists', () => {

  beforeEach(() => {

    let mockDate = [
      {id: 1, title: 'title_test_1', notes: 'notes_test_1'},
      {id: 2, title: 'title_test_2', notes: 'notes_test_2'}
    ];

    sinon.stub(mockDatabase, 'get').callsFake(() => mockDate);
    sinon.stub(mockDatabase, 'push').callsFake((newList) => mockDate.push(newList));
    sinon.stub(mockDatabase, 'save').callsFake((newData) => mockDate = newData);
  });

  afterEach(function () {
      sinon.restore();
  });

  describe('/GET groceryList', () => {
    it('it should GET all the grocery lists', function (done) {
      chai.request(server)
        .get('/groceryList')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
          done();
        });
    })
  })

  describe('/GET groceryList/1', () => {
    it('it should GET search grocery list', function (done) {
      chai.request(server)
        .get('/groceryList/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id', 1)
          res.body.should.have.property('title', 'title_test_1')
          res.body.should.have.property('notes', 'notes_test_1')
          done();
        });
    })
  })

  describe('/GET groceryList/999', () => {
    it('it should GET 404 No Found', function (done) {
      chai.request(server)
        .get('/groceryList/999')
        .end((err, res) => {
          res.should.have.status(404);
          res.text.should.be.a('string');
          res.text.should.have.string('No Found');
          done();
        });
    })
  })

  describe('/POST groceryList', () => {
    it('it should add new grocery list', function (done) {
      chai.request(server)
        .post('/groceryList')
        .type('form')
        .send({
          id: 3,
          title: 'title_test_3',
          notes: 'notes_test_3'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(3);
          done();
        });
    })
  })

  describe('/PUT groceryList', () => {
    it('it should update grocery list', function (done) {
      chai.request(server)
        .put('/groceryList')
        .send({
          id: 2,
          title: 'title_test_XXX',
          notes: 'notes_test_XXX'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
          const object = res.body[1];
          object.should.have.property('title', 'title_test_XXX');
          object.should.have.property('notes', 'notes_test_XXX');
          done();
        });
    })
  })

  describe('/DELETE groceryList/1', () => {
    it('it should update grocery list', function (done) {
      chai.request(server)
        .delete('/groceryList/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          done();
        });
    })
  })

})
