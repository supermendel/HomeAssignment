
import './App.css';
import io from 'socket.io-client'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LobbyPage from './Pages/LobbyPage';


const socket = io.connect('http://localhost:5000');

function App() {
/* 
  const sendMessage= () =>{
    socket.emit('send-message',{text});
  }

  useEffect(()=>{
   socket.on('receive-message',(data)=>{
    setTextReceived(data.text)
   })
  },[socket]); */

  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route index element = {<LobbyPage socket={socket}/>}></Route>
      <Route path="/lobby" element = {<LobbyPage socket={socket}/>}></Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
