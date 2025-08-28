const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const { connectDB } = require('./db');
const ticketRoutes = require('./routes/tickets');
const agentRoutes = require('./routes/agents');

const app = express();
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

connectDB();

app.use('/api/tickets', ticketRoutes);
app.use('/api/agents', agentRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));