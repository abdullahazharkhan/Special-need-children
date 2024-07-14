const express = require('express');
const cors = require('cors');

const connectToDb = require('./database');

connectToDb();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/members",require('./routes/members'));

app.listen(3000,()=>{
    console.log("listening on port 3000");
});

app.get('/',(req,res)=>{
    res.status(200).send("Please modify the API for an appropriate use");
});
