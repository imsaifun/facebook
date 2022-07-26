/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import data from '../../data/users.json'

const UserList = () => {

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
            return el.name.toLowerCase().includes(inputText)
        }
    })

    // console.log(filteredData);

    return (
        <>



            <ul>
                {filteredData.map((user, i) => (
                    // <li key={item.id}>{item.name}</li>

                    <li className='d-flex align-items-center mb-20' key={i}>
                        <img src={user.profile_picture} alt="" width={40} className="rounded-circle" />
                        <div className='ms-10'>
                            <strong>
                                {user.name}
                            </strong>

                            {user.online ? <i className='bi bi-circle-fill text-success ms-10'></i> : <i className='bi bi-circle-fill text-muted ms-10'></i>}

                        </div>
                    </li>
                ))}
            </ul>

            <input
                id="outlined-basic"
                onChange={inputHandler}
                type="text"
                className='form-control'
            />

        </>
    );
};

export default UserList;