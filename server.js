const http = require("http");
// const { title } = require("process");
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
        id: 4,
    }
]
const server = http.createServer(()=>{
    console.log("connection");
})

const requestHandler = (req, res)=>{
    console.log(req);
    res.end(JSON.stringify({message: "connected"}))
}

server.listen(3000, (req, res) =>{
    console.log("am running");
})