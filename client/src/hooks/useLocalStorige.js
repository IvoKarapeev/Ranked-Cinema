import { useState } from "react";

const useLocalStorige = (key,defaultValue) => {
  
    const [value,setValue] = useState(() => {
        const storigeData = localStorage.getItem(key);

        
        if (storigeData) {
            return JSON.parse(storigeData);
        }else {
            return defaultValue
        }
    });

    const setStorigeValue = (newValue) => {
        localStorage.setItem(key,JSON.stringify(newValue));

        setValue(newValue);
    };

    return [
        value,
        setStorigeValue
    ]
    
};

export default useLocalStorige;