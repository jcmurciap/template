import {useEffect, useRef, useState} from "react";
import {onChangeArgs, Product} from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args:onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({onChange, product, value=0}: useProductArgs) => {
    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange); // Si eso existe

    const handleCounter = (value: number) => {
        if(isControlled.current) {
            return onChange!({count: value, product});
        }

        const newValue = Math.max(0, counter + value)
        setCounter(newValue);

        // Solo si onChange trae un valor ejecute la función.
        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
        setCounter(value);
    },[value])

    return {
        counter, handleCounter, onChange
    }
}