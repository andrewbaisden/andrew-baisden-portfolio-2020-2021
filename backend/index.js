const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Andrew Baisden REST Server'));

app.use('/static', express.static(path.join(__dirname + '/public')));

app.use('/api', require('./routes/data'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} http://localhost:${port}`));
