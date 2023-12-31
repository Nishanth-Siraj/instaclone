import React from 'react'
import StatusPosts from './StatusPosts'
import Posts from './Posts'
import "./status.css"
const Status = () => {
  return (
    <>
        <div className="statusPosts">
            <StatusPosts/>
            <Posts/>
        </div>
    </>
  )
}

export default Status