const { app } = require('./handler');

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})