import React from 'react'
import "./profile.css"

const Profile = () => {
    return (
        <div className='userz'>
            <div> 
                <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="" srcset="" />
            </div>
            <div style={{ "color": "white" }} className='userDetails' >
                <div className='userPersonal'>
                    <h4>Sammy Eliot</h4>
                    <button>Edit Profile</button>
                    <button>View Archive</button>
                    <button>Ad Tools</button>
                </div>
                <div className='userPostCount'>
                    <span>2 Posts</span>
                    <span>82 followers</span>
                    <span>383 following</span>
                </div>
                <div>
                    <h5>Sammy Eliot</h5>
                </div>
                <div>
                    <span>Web Developer</span>
                </div>
                <div>
                    WebDesigner | Web Developer
                </div>
            </div>
        </div>
    )
}

export default Profile