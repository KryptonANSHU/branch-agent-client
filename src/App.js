import { useState } from "react";
import Entry from "./pages/Entry";
import ChatPage from './pages/ChatPage';
import Chats from './pages/Chats';
import { Routes , Route} from 'react-router-dom'



function App() {
  return (
    <div className="max-w-lg mx-auto">
      <Routes>
        <Route path='/' element ={<Entry/>}/>
        <Route path='/chat/:id' element ={<ChatPage/>}/>
        <Route path='/chats' element ={<Chats/>}/>
      </Routes>
    </div>
  );
}

export default App;
