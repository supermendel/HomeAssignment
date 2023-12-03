
import './App.css';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000');

function App() {

  const sendMessage= (text)=>{
    //socket.emit('send-message',text)
  }
  return (
    <div className="App">
      <input placeholder='Message...'/>
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
}

export default App;
