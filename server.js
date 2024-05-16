const https = require("https");
const { title } = require("process");
const db = [
    {
        title: "laugh",
        comedian: "me",
        year: 2024,
        id: 1,
    },
    {
        title: "laugh",
        comedian: "me",
        year: 2024,
        id: 2,
    },
    {
        title: "laugh",
        comedian: "me",
        year: 2024,
        id: 3,
    },
    {
        title: "laugh",
        comedian: "me",
        year: 2024,
        id: 3,
    }
]
const server = https.createServer(()=>{

})


server.listen(3000, (req, res) =>{
    console.log("am running");
})