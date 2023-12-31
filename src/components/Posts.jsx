import React from 'react'
import "./posts.css"
const Posts = () => {
  return (
    <>
        <div className="posts">
          <div className="singlePost">
            <div className="singlePostTop">
              <div className="imgContainer posts">
                <img
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  width="40"
                  className="statusPic postStatus"
                />
              </div>
              <div className="postName">Eddie</div>
              <div className="postDate">4d</div>
              <div className="postOpen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#f0f0f0"
                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                  />
                </svg>
              </div>
            </div>
            <div className="singlePostMiddle">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                reiciendis adipisci nam, velit veritatis labore repellendus
                officiis asperiores ullam ducimus mollitia assumenda nisi
                inventore molestias impedit porro optio quam blanditiis nihil
                animi perferendis architecto quia ad dolorum. Laborum tenetur
                minima consequatur maiores sunt voluptatum maxime itaque fugit
                cum dolores porro laudantium quisquam, ipsa dolore voluptatem
                autem nobis modi cupiditate dolor ea repellat dignissimos? Qui
                eaque ut quia cum! Facere corporis dolorum saepe ipsa incidunt
                velit deleniti! Numquam porro distinctio iure dicta tenetur
                voluptatem delectus quis beatae sed in laborum deserunt ducimus
                ullam pariatur maiores, soluta incidunt accusamus quia alias
                architecto.
              </p>
            </div>
            <div className="singlePostReaction">
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-message-circle"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  ></path>
                </svg>
              </div>
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </div>
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark"
                >
                  <path
                    d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="singlePostComments">
              <div className="comments">Liked by: Peter and others</div>
              <div className="comments">Eddie: Hi Hello</div>
              <div className="comments gray">View all 50 Commants</div>
              <div className="comments gray">Add a Comment</div>
            </div>
          </div>

          <div className="singlePost">
            <div className="singlePostTop">
              <div className="imgContainer posts">
                <img
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  width="40"
                  className="statusPic postStatus"
                />
              </div>
              <div className="postName">Eddie</div>
              <div className="postDate">4d</div>
              <div className="postOpen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#f0f0f0"
                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                  />
                </svg>
              </div>
            </div>
            <div className="singlePostMiddle">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                reiciendis adipisci nam, velit veritatis labore repellendus
                officiis asperiores ullam ducimus mollitia assumenda nisi
                inventore molestias impedit porro optio quam blanditiis nihil
                animi perferendis architecto quia ad dolorum. Laborum tenetur
                minima consequatur maiores sunt voluptatum maxime itaque fugit
                cum dolores porro laudantium quisquam, ipsa dolore voluptatem
                autem nobis modi cupiditate dolor ea repellat dignissimos? Qui
                eaque ut quia cum! Facere corporis dolorum saepe ipsa incidunt
                velit deleniti! Numquam porro distinctio iure dicta tenetur
                voluptatem delectus quis beatae sed in laborum deserunt ducimus
                ullam pariatur maiores, soluta incidunt accusamus quia alias
                architecto.
              </p>
            </div>
            <div className="singlePostReaction">
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-message-circle"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  ></path>
                </svg>
              </div>
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </div>
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark"
                >
                  <path
                    d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="singlePostComments">
              <div className="comments">Liked by: Peter and others</div>
              <div className="comments">Eddie: Hi Hello</div>
              <div className="comments gray">View all 50 Commants</div>
              <div className="comments gray">Add a Comment</div>
            </div>
          </div>

          <div className="singlePost">
            <div className="singlePostTop">
              <div className="imgContainer posts">
                <img
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  width="40"
                  className="statusPic postStatus"
                />
              </div>
              <div className="postName">Eddie</div>
              <div className="postDate">4d</div>
              <div className="postOpen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#f0f0f0"
                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                  />
                </svg>
              </div>
            </div>
            <div className="singlePostMiddle">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                reiciendis adipisci nam, velit veritatis labore repellendus
                officiis asperiores ullam ducimus mollitia assumenda nisi
                inventore molestias impedit porro optio quam blanditiis nihil
                animi perferendis architecto quia ad dolorum. Laborum tenetur
                minima consequatur maiores sunt voluptatum maxime itaque fugit
                cum dolores porro laudantium quisquam, ipsa dolore voluptatem
                autem nobis modi cupiditate dolor ea repellat dignissimos? Qui
                eaque ut quia cum! Facere corporis dolorum saepe ipsa incidunt
                velit deleniti! Numquam porro distinctio iure dicta tenetur
                voluptatem delectus quis beatae sed in laborum deserunt ducimus
                ullam pariatur maiores, soluta incidunt accusamus quia alias
                architecto.
              </p>
            </div>
            <div className="singlePostReaction">
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-message-circle"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  ></path>
                </svg>
              </div>
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </div>
              <div className="reaction">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark"
                >
                  <path
                    d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="singlePostComments">
              <div className="comments">Liked by: Peter and others</div>
              <div className="comments">Eddie: Hi Hello</div>
              <div className="comments gray">View all 50 Commants</div>
              <div className="comments gray">Add a Comment</div>
            </div>
          </div>
          
        </div>
        
    </>
  )
}

export default Posts