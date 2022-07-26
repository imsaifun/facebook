import React, { useState } from 'react';
import users from '../../data/users.json'

const User = () => {

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleSearch = () => {
        setSearch(text);
    };

    const filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    });

    console.log(handleText);

    return (
        <>
        <div>
                <input type="text" value={text} onChange={handleText} />
                <button type="button" onClick={handleSearch}>
                    Search
                </button>
                {/* <List list={filteredUsers} /> */}
            </div>
            <ul>
                {filteredUsers.map((user) => (
                    <>
                        <li className='d-flex align-items-center mb-20'>
                            <img src={user.profile_picture} alt="" width={40} className="rounded-circle" />
                            <div className='ms-10'>
                                <strong>
                                    {user.name}
                                </strong>

                                {user.online ? <i className='bi bi-circle-fill text-success ms-10'></i> : <i className='bi bi-circle-fill text-muted ms-10'></i>}

                            </div>
                        </li>
                    </>
                ))}

            </ul>

            
        </>
    );
};

// const List = ({ list }) => {
//     return (
//         <ul>
//             {list.map((item) => (
//                 <ListItem item={item} key={item.id} />
//             ))}
//         </ul>
//     );
// };
// const ListItem = ({ item }) => {
//     return <li> {item.name}</li>;
// };


export default User;