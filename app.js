const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const routes = require('./router');
app.use(routes);
app.listen(3000, () => {
  console.log('Your app is running on port 3000');
});
