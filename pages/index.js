/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import User from "../Components/User/User";
import UserList from "../Components/User/UserList";
import posts from "../data/post.json";
function Home() {


    // const likeCount = users.map((item) => (item.posts.map(like=>(like.likes))))
    // console.log(likeCount);
    const [count, setCount] = useState(0)
    // const aaa = users.map((item)=>item.posts);



    console.log(count);

    const handleClick = (id) => {
        const result = posts.find((idx) => idx.id === id)
        console.log(result);
        // if(result.id){
        //     setCount(prevCount => prevCount + 1)
        // }

    };


    // const handleLikeCounter = ()=>{
    //     setCount(count + 1)
    // }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="posts">
                            {posts.map((post => (
                                <>

                                    <div className="post-head">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-10" src={post.user.profile_picture} alt="" width="30" />
                                            <strong> {post.user.username}</strong>
                                        </div>
                                    </div>
                                    <div className="post-body">

                                        <h4 className="mt-20">{post.title}</h4>
                                        <div className="like-counter mb-10">
                                            <i className="bi bi-hand-thumbs-up-fill"></i>
                                            {/* {post.likes} */}
                                            {count}
                                        </div>
                                        <button onClick={() => handleClick(post.id)}>Click</button>
                                        <ul className="like-comment-share d-flex justify-content-between">
                                            <li>{post.liked ? <span className="text-primary">Liked</span> : <span>Liked</span>}</li>
                                            <li>Comments</li>
                                            <li>Share</li>
                                        </ul>
                                        <div className="post-comment">
                                            {post.comments.map((comment) => (
                                                <>
                                                    {comment.text}
                                                </>
                                            ))}
                                        </div>

                                    </div>
                                </>
                            )))}
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="user-list">
                            {/* <User/> */}
                            <UserList/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Home;