import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-purple-700 w-full p-3'>
      <ul className='flex justify-between'>
        <Link to='/prediction'><img src="../Prediction.svg" alt="Prediction" /></Link>
        <Link to='/'><img src="../Home.svg" alt="Home" /></Link>
        <Link to='/chatbot'><img src="../Chat.svg" alt="Chat" /></Link>
      </ul>
    </footer>
  );
}

export default Footer;
