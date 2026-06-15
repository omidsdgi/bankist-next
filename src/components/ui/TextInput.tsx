const TextInput = ({className=""}:{className:string}) => {
    return (
        <input className={`w-full text-sm text-center rounded-lg px-4 py-2 outline-none focus:border-gray-300 transition-all ${className}`}/>
            );};

export default TextInput;