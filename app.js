const express = require('express');
const path = require('path');
const PORT = 3000;

const routes = require('./routes');

const app = express();

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});