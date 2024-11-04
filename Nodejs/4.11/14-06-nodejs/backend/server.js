import express from 'express'
import cors from 'cors'
import fs from 'fs'

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());

const data = fs.readFileSync('data.json', 'utf8');
const jsonData = JSON.parse(data);




server.get("/todos", (req, res) => {//greift auf die Daten  aus dem Backend zu
    console.log("Ich bekomme ein Get")
    res.json(jsonData)
})



console.log("Server Online")
server.listen(PORT)