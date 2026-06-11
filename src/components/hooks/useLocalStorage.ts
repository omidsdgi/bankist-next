import React, {useEffect, useState} from "react";

export default function UseLocalStorage<T>  (initialState:T, key:string): [T,React.Dispatch<React.SetStateAction<T>>] {
    const[value, setValue] = useState<T>( initialState);

    useEffect(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue){
            setValue(JSON.parse(storedValue) as T);
        }
    }, [key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[value,key]);

    return [value, setValue];
}

