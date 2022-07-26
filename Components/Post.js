import React from 'react';
import posts from "../data/post.json";
const Post = ({filteredData}) => {

    const handleClick = (id) => {
        const result = posts.find((idx) => idx.id === id)
        console.log(result);
    };
    return (
        <>
            <div className="posts">
                {filteredData.map((post => (
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
                                {post.likes}
                                {/* {count} */}
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
        </>
    );
};

export default Post;