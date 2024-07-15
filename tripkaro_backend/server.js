const express = require("express")
const con = require("./src/db/connect")
const cors = require('cors')
require("dotenv").config()

const CitiesRouter = require("./src/routes/Cities.route")
const AdventureRouter = require("./src/routes/Adventure.route")
const AdventureDetailRouter = require("./src/routes/AdventureDetail.route")
const AuthRouter = require("./src/routes/Auth.route")
const ReservationRouter = require("./src/routes/Reservation.route")
const UserRouter = require("./src/routes/User.route")

const app = express()

const PORT = process.env.PORT

const fs = require("fs")

app.use(cors())

app.use(express.json())

app.use('/api/v1/cities', CitiesRouter)
app.use('/api/v1/adventures', AdventureRouter)
app.use('/api/v1/details', AdventureDetailRouter)
app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/reservations', ReservationRouter)
app.use('/api/v1/user/', UserRouter)

app.listen(PORT,()=>{
    console.log("Server Running on port",PORT)
})