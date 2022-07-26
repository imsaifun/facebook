/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Header = ({inputHandler}) => {



    // console.log(filteredData);

    return (
        <>

            <input
                id="outlined-basic"
                onChange={inputHandler}
                type="text"
                className='form-control'
            />

        </>
    );
};

export default Header;