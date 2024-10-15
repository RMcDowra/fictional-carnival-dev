require('dotenv').config();

const express = require("express");
const cors = require('cors');
const routes = require('./server/routes/movieRoutes');
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
