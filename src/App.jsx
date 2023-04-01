import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Header></Header>
    <Blogs></Blogs>
    <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    </div>
  )
}

export default App
