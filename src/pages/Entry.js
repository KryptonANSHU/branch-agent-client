import React from 'react'
import { useNavigate } from 'react-router-dom'

const Entry = () => {

    const customerId = 46

    const navigate = useNavigate()

    const goToChat = () => {
        navigate(`/chat/${customerId}`)
    }

  return (
    <div className='mt-12 max-w-lg mx-auto'>
      <h2 className='text-3xl'>This is the entry page</h2>
      <div className='mt-20'>
        <button onClick={goToChat} className='bg-indigo-600 text-white  rounded-lg py-2 px-8'>Start a chat</button>
      </div>
    </div>
  )
}

export default Entry
