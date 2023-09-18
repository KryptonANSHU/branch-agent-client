import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chat from './Chat';

const Chats = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8000/messages');
                const result = response?.data
                setMessages(result)
            } catch (error) {
                console.log(error)
            }
        })();
        
    },[])

  return (
    <div className='max-w-lg mt-20 mx-auto'>
    <h1 className='text-center text-2xl text-indigo-600'>Chats</h1>
    {messages.length>0? messages.map(message => (
        <Chat key={message._id} chat={message}/>
    )): ''}  
    </div>
  )
}

export default Chats
