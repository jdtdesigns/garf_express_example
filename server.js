const express = require('express');
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
