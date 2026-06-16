interface InputProps {
    className?: string;
    type?: string;
    placeholder?: string;
}

const TextInput = ({className="", type='text', placeholder}:InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full text-sm text-center rounded-lg px-4 py-1 outline-none focus:border-gray-300 transition-all ${className}`}/>
            );};

export default TextInput;