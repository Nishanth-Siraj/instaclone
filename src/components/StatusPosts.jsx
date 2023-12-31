import React from 'react'
import "./statusposts.css"

const StatusPosts = () => {
  return (
    <>
      <div className='topNavBar'>
        <div><div className="logoText">instagram</div></div>
        <div className='topNavBarSearch'>
          <input type="text" className='search' placeholder='search' />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <div>
        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-heart"
                        >
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            ></path>
                        </svg>
        </div>
      </div>
      <div className="status">
        <div className="statusUser">
          <div className="imgContainer">
            <img
              src="https://randomuser.me/api/portraits/men/27.jpg"
              width="60"
              className="statusPic"
            />
          </div>
          <a href="#">Mark Luis</a>
        </div>
        <div className="statusUser">
          <div className="imgContainer">
            <img
              src="https://randomuser.me/api/portraits/men/28.jpg"
              width="60"
              className="statusPic"
            />
          </div>
          <a href="#">Sean Paul</a>
        </div>
        <div className="statusUser">
          <div className="imgContainer">
            <img
              src="https://randomuser.me/api/portraits/men/29.jpg"
              width="60"
              className="statusPic"
            />
          </div>
          <a href="#">Scubert</a>
        </div>
        <div className="statusUser">
          <div className="imgContainer">
            <img
              src="https://randomuser.me/api/portraits/men/20.jpg"
              width="60"
              className="statusPic"
            />
          </div>
          <a href="#">Richard</a>
        </div>
        <div className="statusUser">
          <div className="imgContainer">
            <img
              src="https://randomuser.me/api/portraits/men/31.jpg"
              width="60"
              className="statusPic"
            />
          </div>
          <a href="#">Philip Mathew</a>
        </div>
        <div className="statusUser">
          <div className="imgContainer">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              width="60"
              className="statusPic"
            />
          </div>
          <a href="#">Dominic</a>
        </div>
        <div className="statusUser">
          <div className="imgContainer">
            <img
              src="https://randomuser.me/api/portraits/men/33.jpg"
              width="60"
              className="statusPic"
            />
          </div>
          <a href="#">Julian</a>
        </div>
        <div className="statusUser">
          <div className="imgContainer">
            <img
              src="https://randomuser.me/api/portraits/men/34.jpg"
              width="60"
              className="statusPic"
            />
          </div>
          <a href="#">Eddie</a>
        </div>
      </div>
    </>
  )
}

export default StatusPosts