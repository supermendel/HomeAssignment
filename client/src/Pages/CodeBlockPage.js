
import TextField from '@mui/material/TextField';
import io from 'socket.io-client'
import { useState,useEffect } from 'react';

function CodeBlockPage() {
    const[code,setCode]=useState("");
    const[codeReceived,setCodeReceived] = useState("");


  return (
    <div>Code Block Page
    <div className="textfields">
    <TextField
    
    id="standard-textarea"
    label="Multiline Placeholder"
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