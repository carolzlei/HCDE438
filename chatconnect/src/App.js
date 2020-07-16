import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer'
import Chat from './chat'
import NamePicker from './NamePicker'
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Route} from 'react-router-dom'


function App(){ // function not stored in separate file because it is only a few lines long
  useEffect(()=>{ 
    const path = window.location.pathname
    if(path.length <2){ 
      window.location.pathname = '/home'
    }
  }, []) 
  return <BrowserRouter> 
    <Route path="/:room" component={Room} /> 
  </BrowserRouter> // the router routes react to the different pages
  // <Route path ="/:contact" component={Contact}, the ":" makes the props DYNAMIC
}

function Room(props) {
  const room = props.match.params.room
  const {messages, send} = useDatu(room)
  const [name, setName] =useState(false)

  return (
    <main className="main">

      <header>
        <input type="image" id="back" src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png" alt="back" width='25' height='25' />
        <div className="username">
            <h3> {room} </h3>
        </div>
        <NamePicker saveName={setName} /> 
    </header>
    
    <div className="messages">
      {messages.map((m,i)=> {
        return <Chat key={i} 
          text={m.text} 
          name={m.name} 
          isMe={m.name===name} // this is creating a new variable to test whether the name on the message is equal to our name
          />
      })} 
    </div>

    <Footer 
      onSend={text=> send({ text, room, name}) } // this sends messages to their perpsective room through the two params text and room
    />  

  </main>
  )
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyCKz6gI8DxVvP6Bu70_NXAAfvuGTkMRbNk",
  authDomain: "chatconnect2020-e34f2.firebaseapp.com",
  databaseURL: "https://chatconnect2020-e34f2.firebaseio.com",
  projectId: "chatconnect2020-e34f2",
  storageBucket: "chatconnect2020-e34f2.appspot.com",
  messagingSenderId: "451109696497",
  appId: "1:451109696497:web:4f69dfcff0972909ed8a50",
  measurementId: "G-DS8PCVX7N2"
};
initialize(firebaseConfig)