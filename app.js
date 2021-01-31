const express = require('express');
const cors = require('cors');
const dotenv =  require('dotenv');

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const todoController = require('./routes');
app.use('/api/v1/truck',todoController);

app.listen(process.env.PORT, () =>
console.log(`Listening on port ${process.env.PORT}`),
);