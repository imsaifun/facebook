import users from "../data/users.json";
function Home() {
    // const post = posts


    // console.log(users);
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        {users.map((item, i) => (
                            <>
                                {item.user.username}
                                <br />

                                {item.posts.map((post => (
                                    <>
                                        {post.title}
                                        <br />
                                        Likes : {post.likes}

                                        <br />

                                        {post.comments.map((comment) => (
                                            <>

                                                {comment.text}
                                            </>
                                        ))}
                                    </>
                                )))}
                                <br />
                            </>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}
export default Home;