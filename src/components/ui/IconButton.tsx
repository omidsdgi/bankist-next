import React from "react";

const IconButton = ({children}:{children:React.ReactNode}) => {
    return (
        <button type='submit' className='border-none bg-transparent text-2xl cursor-pointer transition-all duration-300 hover:outline-none hover:text-gray-500 focus:outline-none focus:text-gray-500'>
            {children}
        </button>
    );
};

export default IconButton;