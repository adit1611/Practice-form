import { React,useState } from 'react'
import './App.css'
import Formasset from './formasset'
import axios from 'axios';
function App() {
  

  const handleSubmit = (name, email, message, setName, setEmail, setMessage) => {
        axios.post('http://localhost:3000/Contact', {
        name: name,
        email: email,
        message: message
    })
    .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Clear form after submission
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch(error => {
        console.error('There was an error submitting the form:', error);
    });
};


  
  return (
    <>
      <div className='bg-slate-600'>
        <h1>Hello Form</h1>
        </div>
        <div>
        
          <Formasset handleSubmit = {handleSubmit} />
        </div>
    </>
  )
}

export default App
