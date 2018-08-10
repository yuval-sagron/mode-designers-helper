const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT | 3000;

const app = express();

app.use(express.static( __dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.get('/', (req, res)=>
{
   res.status(202).sendFile(__dirname + '/public/index.html');
});

app.listen(port, ()=>{
    console.log(`Server start listening on port ${port}`);
});
