// const streamDream = [
//     {
//         artist: "Eminem",
//         img: "https://www.billboard.com/wp-content/uploads/2020/04/eminem-press-photo-2019-aqu-billboard-1548-1587659998.jpg?w=1024",
//         headerImg: "https://64.media.tumblr.com/0ef0144591c557a48be4f62c15b612df/tumblr_inline_p7hrwzDk6t1r9hj61_500.png",
//         bio:"Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, and record producer.",
//         videos: [{
//             song: "Lose Yourself",
//             releaseDate:"2002",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/7YuAzR2XVAM?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"8 Mile (Music from and Inspired By the Motion Picture)"
//         }, {
//             song: "Without Me",
//             releaseDate:"2002",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/YVkUvmDQ3HY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"The Eminem Show" 
//         }, {
//             song: "The Real Slim Shady",
//             releaseDate:"2000",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/eJO5HU_7_1w' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"The Marshall Mathers LP" 
//         }]
//     }, {
//         artist: "Rihanna",
//         img: "https://www.cheatsheet.com/wp-content/uploads/2022/02/Rihanna-mint.jpg",
//         headerImg: "https://images.ctfassets.net/1l8uxi2exlw4/6r7DtBII3SyYAyiwWGSYqM/afcdeb1b8b9360c3b024b62dec958925/Samsung_ANTIdiaRy_header.jpg",
//         bio:"Robyn Rihanna Fenty NH is a Barbadian singer, actress, fashion designer, and businesswoman. ",
//         videos: [{
//             song: "Diamonds",
//             releaseDate:"2012",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/lWA2pjMjpBs' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"Unapologetic"
//         }, {
//             song: "Umbrella",
//             releaseDate:"2008",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/CvBfHwUxHIk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"Good Girl Gone Bad: Reloaded" 
//         }, {
//             song: "Don't Stop The Music",
//             releaseDate:"2008",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/yd8jh9QYfEs' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"Good Girl Gone Bad: Reloaded" 
//         }]
//     }, {
//         artist: "Panic! At the Disco",
//         img: "https://media.altpress.com/uploads/2018/10/panic-at-the-disco-2005.jpg",
//         headerImg: "https://i.pinimg.com/originals/44/22/aa/4422aaa483a88c4db84e265ad931a1b2.png",
//         bio:"Panic! at the Disco is the solo project of American musician Brendon Urie. It was originally a pop rock band from Las Vegas, Nevada, formed in 2004 by childhood friends Urie, Ryan Ross, Spencer Smith, and Brent Wilson. ",
//         videos: [{
//             song: "I Write Sins Not Tragedies",
//             releaseDate:"2005",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/vc6vs-l5dkc' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"A Fever You Can't Sweat Out"
//         }, {
//             song: "High Hopes",
//             releaseDate:"2018",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/IPXIgEAGe4U' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"Pray for the Wicked" 
//         }, {
//             song: "This Is Gospel",
//             releaseDate:"2013",
//             link:"<iframe width='560' height='315' src='https://www.youtube.com/embed/tGE381tbQa8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
//             album:"Too Weird to Live, Too Rare to Die!" 
//         }]
//     }
// ]


// module.exports = StreamDream

const mongoose = require('mongoose');

const streamDreamSchema = new mongoose.Schema({
    artist: {
        type: String,
        required: [true, 'artist cannot be empty']
    },
    img: {
        type: String,
        required: [true, 'image cannot be empty']
    },
    headerImg: {
        type: String,
        required: [true, 'header image cannot be empty']
    },
    bio:{
        type: String,
        required: [true, 'bio cannot be empty']
    },
})

const StreamDream = mongoose.model("StreamDream", streamDreamSchema);
module.exports = StreamDream