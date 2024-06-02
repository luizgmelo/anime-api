const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const port = 3000

const animeSchema = new mongoose.Schema({
    title: String,
    description: String,
    num_ep: Number,
    num_season: Number,
    release_date: String 
})

const Anime = new mongoose.model('Anime', animeSchema)

app.get('/', async (req, res) => {
    const anime = await Anime.find()
    return res.send(anime)
})

app.post('/', async (req, res) => {
    const newAnime = new Anime({
        title: req.body.title,
        description: req.body.description,
        num_ep: req.body.num_ep,
        num_season: req.body.num_season,
        release_date: req.body.release_date
    }) 

    await newAnime.save()
    return res.send(newAnime)
})

app.put('/:id', async (req, res) => {
    const anime = await Anime.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        num_ep: req.body.num_ep,
        num_season: req.body.num_season,
        release_date: req.body.release_date
    }, {new:true})
    return res.send(anime)
})

app.delete('/:id', async (req, res) => {
    const anime = await Anime.findByIdAndDelete(req.params.id)
    return res.send(anime)
})

app.listen(port, async () => {
    await mongoose.connect('mongodb+srv://luizgmelo64:<password>@anime-api.uufxtxd.mongodb.net/?retryWrites=true&w=majority&appName=anime-api')
    console.log(`App is running at port ${port}`)
})
