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

// app.use('/streamDream', controllers.streamDream)



app.get('/', (req, res) => {
    res.send('Welcome to StreamDream!!!')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))