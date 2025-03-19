import { useEffect, useState } from "react"

export const useUpdateLogger = (value)=> {
    const [state, setState] = useState(value);
    
    useEffect(()=>{
        console.log("Logged : ", state);
    }, [state]);

    return [state, setState];
}