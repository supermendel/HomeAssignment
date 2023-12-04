
import TextField from '@mui/material/TextField';
import io from 'socket.io-client';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';


function CodeBlockPage({socket}) {

  let { id } = useParams();
  const[dataObject,setDataObject]=useState([]);
  const[code,setCode]=useState("");
  const[codeReceived,setCodeReceived] = useState("");
  const [users,setUsers] = useState([]);

  
  useEffect(()=>{ 
    console.log(`${id}`);
    fetch(`http://localhost:5000/codeblock/${id}`)
    .then(response => response.json())
    .then(data => setDataObject(data)) 
    .catch(error => console.error('Error fetching code blocks:', error));
    
   
    socket.emit('enter-page', {users} )
    //calls when a user entered the page
    socket.on('role-assigned',(_role) =>{
      console.log(_role);
      
      console.log(`before set users: ${users}`);
      setUsers((prevState) =>[...prevState,{role: _role}]);
      console.log(`after set users: ${users}`);

      return ()=>{
        socket.off('role-assigned');
        socket.off('enter-page');
      }
    })
    
  },[]);
    
  
  useEffect(()=>{
    socket.emit('code-update',{message : code});
  },[code]);

  return (
    <div>
     <h1>
      {dataObject.title}</h1>
     
     <div className="textfields">
      <TextField
    
       id="standard-textarea"
       label="Code"
       placeholder="Placeholder"
       multiline
       variant="standard"
       
       onChange={(event)=>{
        setCode(event.target.value);
    }}
      />

    </div>
   </div>
  )
}

export default CodeBlockPage