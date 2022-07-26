import React from 'react';
import users from '../../data/users.json'

const User = () => {
    return (
        <>
            <ul>
                {users.map((user) => (
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

export default User;