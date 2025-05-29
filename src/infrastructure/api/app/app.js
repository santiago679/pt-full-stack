const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRouter = require('../routes/usuarioRoutes');
const adminRouter = require('../routes/adminRoutes');
const errorHandler = require('../middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/admin', adminRouter);

app.use(errorHandler);

module.exports = app;
