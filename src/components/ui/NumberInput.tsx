import React from "react";

interface NumberProps {
    type?: number ;
    placeholder?: string ;
    className?: string ;
    value?: string ;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({className="", placeholder, value, onChange}:NumberProps) => {
    return (
        <input
            type='number'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full text-xl text-center rounded-lg px-4 py-1 outline-none focus:border-gray-300 transition-all ${className}`}   />
    );
};

export default NumberInput;