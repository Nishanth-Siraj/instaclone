import React from 'react'
import Sidebar from './Sidebar'
import StatusRightSide from './StatusRightSide'
import Status from './Status'

const Home = () => {
  return (
    <>
        <Sidebar/>
        <Status />
        <StatusRightSide/>
    </>
  )
}

export default Home