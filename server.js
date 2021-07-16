const express = require('express');
const cors = require('cors');
const app = express();
 
require('./src/index')(app);

app.use(cors());
app.use(express.json());

var port = process.env.PORT || 8080;
app.listen(port);