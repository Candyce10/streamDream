module.exports = {
    StreamDream: require('./StreamDream'),
    Comment: require('./Comment'),
    Song: require('./Song'),
}

app.connect(process.env.MONGODB_URI || "http://localhost:4000/streamDream")