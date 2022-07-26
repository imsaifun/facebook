/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Header from "../Components/Layout/Header";
import Post from "../Components/Post";
// import User from "../Components/User/User";
import UserList from "../Components/User/UserList";

import data from '../data/post.json'
function Home() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filteredData = data.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.title.toLowerCase().includes(inputText)
        }
    })

    console.log(filteredData);
    
    return (
        <>

        <Header inputHandler={inputHandler}/>

            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="posts">
                           <Post filteredData={filteredData}/>
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