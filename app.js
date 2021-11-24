const express = require('express');
const morgan = require('morgan');

const dotenv = require('dotenv');
dotenv.config();


// middle-wares
const app = express();
app.use(express.json());
app.use(morgan('dev'));


// routes...

app.get('/', (req, res, next) => { 
    res.send('server is running');
});




// start server
const port  = process.env.PORT || 8080;
app.listen(port, () => { 
    console.log(`Express server listening on port ${port}`);
});

