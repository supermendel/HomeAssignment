

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LobbyPage = ({socket}) => {
    
    return ( 
        <div className="lobbypage">
            <div className="content">
                <h1>Lobby Page</h1>
            <div className='buttons'>
            <Stack alignSelf={'center'} spacing={4} direction="row">
                <Button  variant="contained">Code 1</Button>
                <Button variant="contained">Code 2</Button>
                <Button variant="contained">Code 3</Button>
            </Stack>

            </div>   
            </div>
        </div>
     );
}
 
export default LobbyPage ;