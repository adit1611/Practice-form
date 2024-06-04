import React, { useState } from "react";

function Formasset({ handleSubmit }){
const [message, setMessage] = useState("");
const [email, setEmail] = useState("");
const [name, setName] = useState("");

const onSubmit = async(e) => {
    e.preventDefault(); 

    handleSubmit(name, email, message, setName, setEmail, setMessage);

   
  };

return (
    <div className="w-1/2 h-80 bg-blue-500  rounded-md content-center mx-52 my-20 text-black">
                <form onSubmit={onSubmit}  className="block text-black m-5">
                        <label htmlFor="name" >Name:</label>
                        <br/>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}  className="w-3/5 h-10 mx-10 rounded-lg"/>
                        <br/>

                        <label htmlFor="email" >Email:</label>
                        <br/>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="w-3/5 h-10 mx-10 rounded-lg"/>
                        <br/>
                        <label htmlFor="message">Message:</label>
                        <br/>
                        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-3/5 h-32 mx-10 rounded-lg" />
                        <br/>
                        <button type="submit" className="bg-pink-400 rounded-xl w-24 h-16 m-10 text-center font-semibold text-black">Send</button>
            </form>
    </div>
)

}

export default Formasset