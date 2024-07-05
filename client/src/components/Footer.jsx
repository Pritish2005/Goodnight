import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' bg-purple-700 w-full absolute bottom-0 px-5'>
        <div>
            <ul className=' flex p-2 justify-between'>
                <Link to='/prediction'><img src="../Prediction.svg" alt="Prediction" /></Link>
                <Link to='/'><img src="../Home.svg" alt="Home" /></Link>
                <Link to='/chatbot'><img src="../Chat.svg" alt="Chat" /></Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer