
import TextField from '@mui/material/TextField';
import io from 'socket.io-client';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';


function CodeBlockPage({socket}) {

  let { id } = useParams();
  const[dataObject,setDataObject]=useState([]);
  const[code,setCode]=useState("");
  const[codeReceived,setCodeReceived] = useState("");
  const[isMentor,setIsMentor] = useState(false);
 

  
  useEffect(()=>{ 
    console.log(`${id}`);
    fetch(`http://localhost:5000/codeblock/${id}`)
    .then(response => response.json())
    .then(data => setDataObject(data)) 
    .catch(error => console.error('Error fetching code blocks:', error));
    
   //calls when user entered the room
    socket.emit('enter-page', {id})
     socket.on('enter-page' ,(isFirst)=>{
      console.log(isFirst);
       setIsMentor(isFirst);
    }) 
      return ()=>{
        //socket.off('role-assigned');
        socket.off('enter-page');
      } 
    
    
    
  },[]);
    
  socket.on('code-received',(code)=>{
    setCodeReceived(code);
  })
 
  
  useEffect(()=>{
    socket.emit('code-update',{ code ,id});
  },[code]);

  return (
    <div>
     <h1>
      {dataObject.title}</h1>
     
     <div className="textfields">
      <TextField
        InputProps={{
      readOnly: isMentor
       }} 
       id="standard-textarea"
       label="Code"
       placeholder="Placeholder"
       multiline
       variant="filled"
       
       onChange={(event)=>{
        setCode(event.target.value);
    }}
      />
      <h1>The code is :{codeReceived}</h1>

    </div>
   </div>
  )
}

export default CodeBlockPage