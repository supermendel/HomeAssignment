
import './App.css';
import io from 'socket.io-client'
import { useEffect ,useState  } from 'react';
const socket = io.connect('http://localhost:5000');

function App() {

  const[text,setText] = useState("");
  const[textReceived,setTextReceived] = useState("");
  const sendMessage= ()=>{
    socket.emit('send-message',{text});
  }

  useEffect(()=>{
   socket.on('receive-message',(data)=>{
    setTextReceived(data.text)
   })
  },[socket]);

  return (
    <div className="App">
      <input placeholder='Message...' onChange={(event)=>{
        setText(event.target.value);
      }}/>
      <button onClick={sendMessage}>Send message</button>

      <h1> Message :  </h1>
      {textReceived}
    </div>
  );
}

export default App;
