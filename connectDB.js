const mongoose = require('mongoose') ;

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL) ;
        console.log("Databse connected .") ;
    } catch (error) {
        console.log(error.message) ;
    }
}

module.exports = connectDB ;