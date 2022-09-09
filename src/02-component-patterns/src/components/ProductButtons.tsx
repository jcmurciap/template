import {CSSProperties, useCallback, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

interface ProductButtonsProps {
    style?: CSSProperties;
    className?: string;
}

export const ProductButtons = ({className, style}:ProductButtonsProps) => {
    const {handleCounter, counter, maxCount} = useContext(ProductContext);

    const  isMaxReached = useCallback(() =>
        !!maxCount && counter === maxCount
    , [counter, maxCount])

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={`${styles.buttonMinus}`} style={style} onClick={() => handleCounter(-1)}> - </button>
            <div className={`${styles.countLabel}`} style={style}>{counter}</div>
            <button className={`${isMaxReached() && styles.disabled} ${styles.buttonAdd}`} style={style} onClick={() => handleCounter(+1)}> + </button>
        </div>
    )
}
