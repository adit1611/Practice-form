import React from 'react'

function Register() {
  return (
    <div className='bg-blue-500 h-3/4 w-1/2 '>
    <form>
        <label htmlFor='fname'>Enter First Name:</label>
        <br/>
       <input id='fname'/>
       <br/>
       <label htmlFor='lname'>Enter Last Name:</label>
       <br/>
       <input id='lname'/>
       <br/>
       <label htmlFor='phone'>Contact Number:</label>
       <br/>
       <input id='phone'/>
    </form>
    </div>
  )
}

export default Register