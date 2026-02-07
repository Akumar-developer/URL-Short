const express = require('express') ;
const connectDB = require('./connectDB') ;
const urlroute = require('./routes/URL_routes')
const dotenv = require('dotenv') ;

const app = express() ;
dotenv.config() ;
connectDB() ;
port = 3000 ;

app.use(express.json()) ;

app.use("/url" , urlroute ) ;

app.get('/' , (req , res) => {
    res.json("hello buddy!") ;
});





app.listen(process.env.PORT , () => {
    console.log(`Server is running on ${process.env.PORT}`) ;
});