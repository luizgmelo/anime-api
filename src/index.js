const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const port = 3000

app.listen(port, async () => {
    await mongoose.connect('mongodb+srv://luizgmelo64:<password>@anime-api.uufxtxd.mongodb.net/?retryWrites=true&w=majority&appName=anime-api')
    console.log(`App is running at port ${port}`)
})
