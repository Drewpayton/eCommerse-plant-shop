const express = require('express');
const app = express();
const path = require('path');
const deviceData = require('./db/data');

const PORT = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api', (req, res) => {
    res.json(deviceData)
})








app.listen(PORT, () => console.log(`Website launched launched at http://localhost:${PORT}`))