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
const reqHandler = (req, res)=>{
    // res.end(JSON.stringify({message: "alive"}))
    if(req.url === "/" && req.method === "GET"){
        getJokes(req, res)

    }else if(req.url ==="/jokes/1" && req.method === "PATCH"){
        updateJokes(req, res)

    }
    else{
        res.writeHead(404)
        res.end(JSON.stringify({message: "opps not found"}))

    }

}

function getJokes(req, res){
    res.writeHead(202)
    res.end(JSON.stringify({db, message: "jokes fetched"}))

}
function updateJokes(req, res){
    const id = req.url.split("/")
    res.writeHead(202)
    res.end(JSON.stringify({id, message: "jokes updated"}))

}
const server = http.createServer(reqHandler)




server.listen(3003, () =>{
    console.log("am running");
})