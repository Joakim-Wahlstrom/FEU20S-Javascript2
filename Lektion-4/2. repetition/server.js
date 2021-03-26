const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8888;

const serverURI = 'http://localhost:' + PORT;
mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('Server runnig at: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('connected to DB'))