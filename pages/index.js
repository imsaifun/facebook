/* eslint-disable @next/next/no-img-element */
import users from "../data/users.json";
function Home() {
    // const post = posts


    // console.log(users);
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="posts">
                            {users.map((item, i) => (
                                <>
                                    <div className="post-head">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-10" src={item.user.profile_picture} alt="" width="30" />
                                            <strong> {item.user.username}</strong>
                                        </div>
                                    </div>
                                    <div className="post-body">
                                        {item.posts.map((post => (
                                            <>
                                                <h4>{post.title}</h4>
                                                <ul className="like-comment-share d-flex justify-content-between">
                                                    <li>Likes : {post.likes}</li>
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
                                            </>
                                        )))}
                                    </div>


                                    <br />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Home;