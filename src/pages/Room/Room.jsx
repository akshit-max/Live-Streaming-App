import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Room = () => {
  const[username,setUserName]=useState("")
  const navigate=useNavigate();
  const handleSubmit=()=>{
  if (!username){
    return alert('Please Provide UserName!!')

  }
  navigate(`/stream/${username}`)
  setUserName('')


  }
  return (
   <>
   <div className="form-container">
    <h1>Start Your Streaming</h1>
    <div  className="form-group">
      <input type="text" placeholder='please enter your name' 
      value={username}
      onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleSubmit} >Join</button>
    </div>
   </div>
   </>
  )
}

export default Room
