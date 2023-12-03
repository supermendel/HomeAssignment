

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CodeBlockPage from './CodeBlockPage';
import { Link } from "react-router-dom";
import  CodeBlock from '../Codeblock.json';
import { useEffect,useState } from 'react';

const LobbyPage = ({socket}) => {
   const [dataObject,setDataObject]=useState([]);
  
    useEffect(()=>{
        console.log(CodeBlock.codeBlocks);
        setDataObject(CodeBlock.codeBlocks);
    },[])
     

    
    return ( 
        <div className="lobbypage">
            <div className="content">
                <h1>Lobby Page</h1>
            <div className='buttons'>
            <Stack alignSelf={'center'} spacing={4} direction="row">
               {dataObject.map((blockCard,index)=>{
                 return<Link
                  to = {`/codeblock/${blockCard.id}`}>
                   <Button  variant="contained">{blockCard.title}</Button>
                    </Link>
                })
            
                }
            </Stack>           
        
            </div>   
            </div>
        </div>
     );
}
 
export default LobbyPage ;