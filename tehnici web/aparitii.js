const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const fs = require("fs");
function readJSONFile() {
    return JSON.parse(fs.readFileSync("ap.json"))["players"];
}

function writeJSONFile(content) {
    fs.writeFileSync(
        "ap.json",
        JSON.stringify({ players: content }),
        "utf8",
        err => {
        if (err) {
            console.log(err);
        }
        }
    );
}

app.get('/players', (req, res) => {
    var players = readJSONFile();
    res.send(players);
})

app.get('/players/:id', (req, res) => {
    var players = readJSONFile();
    var player;
    var id = req.params.id;
    for(let i = 1; i < players.length; i++) {
        if(players[i].id === id) {
            player = players[i];
            break;
        }
    }
    res.send(player); 
})

app.post('/players', (req, res) => {
    var player={
        id: uuid.v1(),
        name: req.body.name,
        img: req.body.img
    }
    
    var players = readJSONFile(); 
    players.push(player); 
    writeJSONFile(players); 
    res.send(player); 
})

app.delete('/players/:id', (req, res) => {
    var id = req.params.id;
    var players = readJSONFile();
    var updatedPlayers = [];
    for(let i = 0; i < players.length; i++) {
        if(players[i].id !== id) {
            updatedPlayers.push(players[i]);
        }
    }
    writeJSONFile(updatedPlayers);
})

app.put('/players/:id', (req, res) => {
    var id = req.params.id;
    
    var updatedPlayer = req.body;
    console.log(id,updatedPlayer)

    var players = readJSONFile();

    for(let i = 0; i < players.length; i++) {
        if(players[i].id === id) {
            players[i] = updatedPlayer;
        }
    }
    writeJSONFile(players);
    res.send(players);
})
app.listen(3000, () => {console.log("Our app is listing on port 3000")});