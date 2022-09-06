import {useState} from "react";
import {onChangeArgs, Product} from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args:onChangeArgs) => void
}

export const useProduct = ({onChange, product}: useProductArgs) => {
    const [counter, setCounter] = useState(0)

    const handleCounter = (value: number) => {
        const newValue = Math.max(0, counter + value)
        setCounter(newValue);

        // Solo si onChange trae un valor ejecute la función.
        onChange && onChange({count: newValue, product});
    }

    return {
        counter, handleCounter, onChange
    }
}