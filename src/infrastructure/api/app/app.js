const express = require('express');
const cors = require('cors');
require('dotenv').config();

const UserRouter = require('../routes/UserRoutes');
const AdminRouter = require('../routes/AdminRoutes');
const errorHandler = require('../middleware/errorHandler');

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(express.json());

app.use('/api/users', UserRouter);
app.use('/login', AdminRouter);

app.use(errorHandler);

module.exports = app;
