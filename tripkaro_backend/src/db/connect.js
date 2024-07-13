const mongoose = require("mongoose")
require("dotenv").config()

MONGODB_CONN_STRING = process.env.MONGODB_URL

mongoose.connect(MONGODB_CONN_STRING)
 .then(() => {
    console.log("Connected to MongoDB")
})