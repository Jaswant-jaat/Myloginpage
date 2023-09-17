import './App.css';
import Login from './loginpage';
import { useState } from 'react';

function App() {
  const[user,setUser]=useState(null)
  const HndlLogin=(email)=>{

    setUser(email)
  }
  const HndlLogout=()=>{
    setUser(null)
  }
  return (
    <div className="App">
      
      {
        user?(
          <div>
            <h2>Welcome {user}</h2>
            <button onClick={HndlLogout}>logout</button>
          </div>
        ):(
          <Login onlogin={HndlLogin}/>
        )
      }
    </div>
  );
}

export default App;
