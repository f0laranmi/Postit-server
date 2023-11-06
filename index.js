require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 4500
const authRouter = require ('./routes/authRouter')


// middleware
app.use(express.json())
app.use(cors())

// routes
app.use("/api", authRouter)
// error routes
app.use((req, res) => {
    res.status(404).json({message: 'Resource not found'})
})

// db Connection
const startServer = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI, {
            dbName: "POSTITDB",
        })
        app.listen (PORT, () => {
            console.log(`server running on port : ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()

