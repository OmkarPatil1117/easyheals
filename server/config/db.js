const mongoose = require("mongoose");
const colors = require("colors");


const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MONGODB CONNECTED ${mongoose.connection.host}`.bgGreen.white);
    } catch(e) {
        console.log(` MOngodb server issue ${e}`.bgRed.white);
    }
}

module.exports = connectdb;