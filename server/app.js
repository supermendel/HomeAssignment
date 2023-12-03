const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const {Server} = require('socket.io');
const app = express();
const cors = require('cors');

app.use(cors());
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database');
});
const server = http.createServer(app); 
const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000"
    }
});

io.on('connection',(socket)=>{
 console.log(`User Connected : ${socket.id}`);
  
 socket.on('send-message',(data)=>{
  socket.broadcast.emit('receive-message',data);
 });

})


server.listen(5000,()=>{
    console.log("Server is running");
})