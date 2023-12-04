const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const CodeBlock = require('./Models/Codeblock');
const {Server} = require('socket.io');
const app = express();
const cors = require('cors');
const teachers = [];
const students = [];

app.use(cors());


mongoose.connect('mongodb://localhost:27017/HomeAssignmentDB', {
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


let savedID;


io.on('connection',(socket)=>{
 console.log(`User Connected : ${socket.id}`);
  
 socket.on('code-update',(data)=>{
  socket.broadcast.emit('code-received',(data));
  console.log(data);
  })


  socket.on('enter-page', (data) => {
   const userID = socket.id;
   let isFirstUser = (!data.users).length;

   console.log(isFirstUser);
   const role = isFirstUser ? 'teacher' : 'student';
   socket.emit('role-assigned',(role));
   console.log((data.users).length);
  })
  
   
 });
  async function getCodeBlockByID(_id){
 try{
  const codeblock = await CodeBlock.findOne({id:_id});
  if(codeblock){
    console.log(codeblock);
    return codeblock;
  }
  else{
    console.log("could not find codeblock");
  }

 }catch(error){
  console.log('Error retrieving code block;' , error);
 }
 }

app.get('/lobby', async (req, res) => {
  try {
    const codeblocks = await CodeBlock.find();
    res.json(codeblocks); //transfering to json
  } catch (error) {
    console.error('Error fetching code blocks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/codeblock/:id', async (req, res) => {
  try {
    const  _id  = req.params.id;
    console.log(_id);
    const codeblock = await getCodeBlockByID(_id);
    res.json(codeblock); 
  } catch (error) {
    console.error('Error fetching code blocks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


server.listen(5000,()=>{
    console.log("Server is running");
})