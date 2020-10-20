const express = require('express');
const path = require('path');
const ideas = require('./models/drawingSuggestion');
const config = require('./config');
const cors = require('cors');

const app = express();
const PORT = config.PORT;

app.use(cors());
app.use(express.static(path.resolve(`${__dirname}/public/`)));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/public/index.html`));
});

app.get('/api/ideas', (req, res) => {
    res.send(ideas);
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});