import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = ({chat}) => {
    
    const navigate = useNavigate()

    const goToChat = () => {
        navigate(`/chat/${chat.room}`)
    }

  return (
    <div onClick={goToChat} className='border my-3 p-2 cursor-pointer border-green-600'>
      {chat.content}
    </div>
  )
}

export default Chat
