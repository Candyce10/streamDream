// mongoose.connect(process.env.MONGODB_URI || "http://localhost:4000/streamDream")
mongoose.connect('mongodb://localhost:4000/streamDream');

module.exports = {
    StreamDream: require('./StreamDream'),
    Comment: require('./Comment'),
    Song: require('./Song'),
}

