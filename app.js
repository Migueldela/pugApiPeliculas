const express = require('express')
const morgan = require('morgan')
const router = require("./controllers/index")
const routerApi = require("./controllers/apis")
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static(__dirname + '/public'));
app.use('/api', routerApi)

app.use("/", router);

app.use(morgan('tiny'))

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`)
});