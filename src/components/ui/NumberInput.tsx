import {BaseInputProps} from "@/types/Type";

const NumberInput = ({type='number',className="", placeholder, value, onChange}:BaseInputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full text-xl text-center dark:text-gray-700 rounded-lg px-4 py-1 outline-none focus:border-gray-300 transition-all ${className}`}   />
    );
};

export default NumberInput;