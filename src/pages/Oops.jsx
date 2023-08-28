import React from 'react'
import { useNavigate } from 'react-router'

const Oops = () => {
    const navigate = useNavigate()
  return (
    <div className="oops page">
        <div className="content">
            <h1>
                404
            </h1>
            <p>
                This page doesn't exist or has been deleted
            </p>
            <button onClick={()=>{
                navigate("/", {replace: true})
            }}>Home</button>
        </div>
    </div>
  )
}

export default Oops