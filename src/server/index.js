const express = require('express');
const path = require('path');
const ideas = require('./drawingIdeas');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(`${__dirname}/../client/static/`)));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../client/views/index.html`));
});

app.get('/api/ideas', (req, res) => {
    res.send(ideas);
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});