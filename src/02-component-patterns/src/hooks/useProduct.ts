import {useState} from "react";

export const useProduct = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = (value: number) => {
        setCounter(prevState => Math.max(0, prevState + value))
    }
    return {
        counter, handleCounter
    }
}