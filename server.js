const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const app = express();

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('login');
})


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3001'));
});
