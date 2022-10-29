const express = require('express')
const internship = require('./models/internship');

const routes = require('./routers/routes')

const app = express();
app.use(routes);
const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log('Server is up on port: ' + port);
})