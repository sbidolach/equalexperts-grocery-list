require('dotenv').config({ path: '.env.local' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./server/routes');

const port = process.env.SERVER_PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

routes.setup(app);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = server
