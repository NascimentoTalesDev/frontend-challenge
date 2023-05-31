import { useState } from "react";

export function useLocalStorage<T>(item: string) {
    
    const [value, setValue] = useState(localStorage.getItem(item) ?? '')

    const updateLocalStorage = (newValue: T) => {
        localStorage.setItem(item, JSON.stringify(newValue))
    }

    return{
        value,
        updateLocalStorage
    }
}