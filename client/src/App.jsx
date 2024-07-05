import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Prediction from './pages/Prediction';
import Chatbot from './pages/Chatbot';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow overflow-hidden no-scrollbar'>
          <div className='h-full overflow-y-scroll'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/prediction' element={<Prediction />} />
              <Route path='/chatbot' element={<Chatbot />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
