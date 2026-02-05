const express = require('express') ;
const dotenv = require('dotenv') ;

const app = express() ;
dotenv.config() ;
port = 3000 ;

app.get('/' , (req , res) => {
    res.json("hello buddy!") ;
});



app.listen(process.env.PORT , () => {
    console.log(`Server is running on ${process.env.PORT}`) ;
});