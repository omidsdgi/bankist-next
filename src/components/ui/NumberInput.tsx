import React from "react";

const NumberInput = ({children}:{children:React.ReactNode}) => {
    return (
        <input className={`w-full text-sm text-center rounded-lg px-4 py-2 outline-none focus:border-gray-300 transition-all ${children}`}   />
    );
};

export default NumberInput;