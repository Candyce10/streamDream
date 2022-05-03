const express = require('express');
const methodOverride = require('method-override');
const controllers = require('./controllers');

const app = express();

require('./config/db.connection');

const PORT = 4000;


app.set('view engine', 'ejs');



app.use(express.static('public'))

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))


// Controllers
app.use('/streamDream', controllers.streamDreams)
app.use('/comments', controllers.comments)
app.use('/songs', controllers.songs)


// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to StreamDream!!!')
})

// Listen
app.listen(process.env.PORT, () => console.log(`Listening on port: ${PORT}`))