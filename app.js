const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./router');
app.use(routes);
app.listen(3000, () => {
  console.log('Your app is running on port 3000');
});
