const express = require('express')
const router = require("./controllers/index")
const routerApi = require("./controllers/apis")
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static(__dirname + '/public'));
app.use('/api', routerApi)

app.use("/", router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});