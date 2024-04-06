const dotenv = require('dotenv');
const connectToMongo = require('./db');
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');


dotenv.config({path:'./.env'});
app.use(cors());
connectToMongo();
app.use(express.json());


app.use('/api/notes', require('./Routes/Notes'));
app.use('/api/user', require('./Routes/User'));


app.get('/', (req,res)=>{
    res.send('Hello MassGyan');
});
app.listen(process.env.PORT, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT}`);
});