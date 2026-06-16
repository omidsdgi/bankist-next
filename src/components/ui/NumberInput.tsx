import React from "react";

interface NumberProps {
    type?: number ;
    placeholder?: string ;
    className?: string ;
}

const NumberInput = ({className="", placeholder}:NumberProps) => {
    return (
        <input
            type='number'
            placeholder={placeholder}
            className={`w-full text-xl text-center rounded-lg px-4 py-1 outline-none focus:border-gray-300 transition-all ${className}`}   />
    );
};

export default NumberInput;