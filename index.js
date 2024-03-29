const express = require("express");
const app = express();
//load the env thru dotenv
require('dotenv').config();

//load router
const postsRouter = require('./routes/posts.router');

//use the following to recieve response data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const PORT = process.env.PORT || 3001;

//create default route
app.use("/api/v1/posts");

app.listen(PORT, ()=>{
 console.log('Server Running...');
});