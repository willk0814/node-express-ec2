const express = require('express');
const app = express();


const port = 5001
app.listen(port, () => console.log(`Api running on http://localhost:${port}/`));
app.get('/', (req, res) => res.json('Hello World'));