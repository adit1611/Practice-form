import React, { useState } from 'react'
import axios from 'axios';
function entry() {
        
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const Submit_detail = async(e) => {
        e.preventDefault();

        const contact = await axios.post("http://localhost:5000/detail",name.value,email.value)
        console.log(contact.data);

        setName('');
        setEmail('');
    }

  return (
    <div>
        <form onSubmit={Submit_detail}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' className='name' value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' className='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default entry