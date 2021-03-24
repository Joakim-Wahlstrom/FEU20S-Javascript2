const app = require('./app');
mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const serverURI = 'http://localhost:' + PORT;
const mongoURI = 'mongodb+srv://Joakim:BytMig123@cluster0.3gv4h.mongodb.net/Todos?retryWrites=true&w=majority';

app.listen(PORT, () => console.log('Webserver runnig at: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to the database'));