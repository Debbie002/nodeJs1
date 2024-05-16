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
    if(req.url === "/home" && req.method === "GET"){
        getJokes(req, res)

    }else if(req.url === "/jokes" && req.method === "POST"){
        postJokes(req, res)
    }else if(req.url ==="/jokes/" && req.method === "PATCH"){
        updateJoke(req, res)

    }else if(req.url === "/delete"){
        deleteJoke(req, res)
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
function postJokes(req, res){
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const newJoke = JSON.parse(body);
        newJoke.id = db.length + 1;
        db.push(newJoke);
        res.writeHead(200)
        res.end(JSON.stringify(db));
      } catch (error) {
     
        res.end(JSON.stringify({ message: 'Invalid joke data' }));
      }
    });

}
function updateJoke(req, res, jokeId) {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const updatedJokeData = JSON.parse(body);
        const jokeIndex = db.findIndex((joke) => joke.id === jokeId);
  
        if (jokeIndex !== -1) {
          db[jokeIndex] = {
            ...db[jokeIndex],
            ...updatedJokeData,
          };
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(db[jokeIndex]));
        } else {
          res.writeHead(404);
          res.end(JSON.stringify({ message: 'Joke not found' }));
        }
      } catch (error) {
        console.error('Error parsing request body:', error);
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Invalid joke data' }));
      }
    });
  }
  
  function deleteJoke(req, res, jokeId) {
    const jokeIndex = db.findIndex((joke) => joke.id === jokeId);
  
    if (jokeIndex !== -1) {
      const deletedJoke = db.splice(jokeIndex, 1)[0];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res
    }
}


const server = http.createServer(reqHandler)




server.listen(3003, () =>{
    console.log("am running");
})