import React from "react";

interface ButtonProps {
    type?: "submit" | "button";
}

const IconButton = ({type='submit'}:ButtonProps) => {
    return (
        <button
            type={type}
            className='text-2xl border-none bg-transparent cursor-pointer transition-all duration-300 hover:outline-none hover:text-gray-700 focus:outline-none focus:text-gray-700'>
            &rarr;
        </button>
    );
};

export default IconButton;