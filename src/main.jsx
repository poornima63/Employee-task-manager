import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <AuthProvider>
      <App/>
       <ToastContainer position="top-right" autoClose={3000} />
   </AuthProvider>
        
    
   
  </StrictMode>,
)
