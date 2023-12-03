
import TextField from '@mui/material/TextField';
import io from 'socket.io-client';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CodeBlockPage(props) {

  let { id } = useParams();

  const[code,setCode]=useState("");
  const[codeReceived,setCodeReceived] = useState("");
  

  return (
    <div>

     
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