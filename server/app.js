const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const {Server} = require('socket.io');
const app = express();
const cors = require('cors');

app.use(cors());
const server = http.createServer(app); 
const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000"
    }
});

io.on('connection',(socket)=>{
 console.log(`User Connected : ${socket.id}`);
})

server.listen(5000,()=>{
    console.log("Server is running");
})