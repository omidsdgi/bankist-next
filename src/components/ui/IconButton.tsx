import React from "react";

interface ButtonProps {
    type?: "submit" | "button";
}

const IconButton = ({type='submit'}:ButtonProps) => {
    return (
        <button
            type={type}
            className='text-xl border-none bg-white rounded-lg  cursor-pointer transition-all duration-300 dark:text-gray-500 hover:outline-none hover:text-gray-700 focus:outline-none focus:text-gray-700'>
            &rarr;
        </button>
    );
};

export default IconButton;