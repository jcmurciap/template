import {useEffect, useRef, useState} from "react";
import {InitialValues, onChangeArgs, Product} from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args:onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value=0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false); // ¿El componente esta montado?

    const handleCounter = (value: number) => {
        const maxCount =  initialValues?.maxCount || -1; // BUG si no hay maxValue
        const newValue = Math.max(counter + value, 0);
        !(maxCount + 1 <= newValue) && setCounter(newValue);
        // Solo si onChange trae un valor ejecute la función.
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if(!isMounted.current) return; //Si no esta montado no quiero hacer nada
        else isMounted.current = true;

        setCounter(value);
    },[value]);

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        handleCounter,
        reset
    }
}