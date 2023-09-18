import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';


const socket = io('http://localhost:8000')

const ChatPage = () => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    const { id } = useParams()


    useEffect(() =>{
        const populateChats = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/messages/${id}`)
                const result = response?.data
                setMessages(result)
            } catch (error) {
                console.log(error)
            }
        }

        socket.emit('join_room', id)

        socket.on('receive_message', (message) => {
            console.log(message)
            setMessages(prevMessages => [...prevMessages, message])
        })

        populateChats()

    },[id])


    const sendMessage = () => {
        // e.preventDefault();
        const info = {room:id, content:newMessage}
        console.log(info)
        socket.emit('send_message', info)
        // setMessages('')
    }

    


  return (
    <div className='max-w-lg mt-20 mx-auto'>
        <div className='h-60 border border-indigo-600 p-3 overflow-auto'>
            {messages? messages.map(message => (
                <p key={message._id}>{message.content}</p>
            )): ''}
        </div>
            <input className='border mt-3' type='text' value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder='send a message'/>
            <button onClick={sendMessage} className='bg-indigo-600 text-white rounded-lg ml-3 cursor-pointer px-6' type='submit' value='send'>Send</button>

    </div>
  )
}

export default ChatPage
