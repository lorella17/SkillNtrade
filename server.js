const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8081;

const app = express();

const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/skillController');

app.use(routes);

db.sequelize.sync({}).then( () => {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});

