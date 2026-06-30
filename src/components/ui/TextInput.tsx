import React from "react";

interface InputProps {
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({className="", type='text', placeholder,value, onChange}:InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full text-xl text-center dark:text-gray-700 rounded-lg px-4 py-1 outline-none focus:border-gray-300 transition-all ${className}`}/>
            );};

export default TextInput;