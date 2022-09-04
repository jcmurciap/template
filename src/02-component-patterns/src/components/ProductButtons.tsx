import {CSSProperties, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

interface ProductButtonsProps {
    style?: CSSProperties;
    className?: string
}

export const ProductButtons = ({className, style}:ProductButtonsProps) => {

    const {handleCounter, counter} = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={`${styles.buttonMinus}`} style={style} onClick={() => handleCounter(-1)}> - </button>
            <div className={`${styles.countLabel}`} style={style}>{counter}</div>
            <button className={`${styles.buttonAdd}`} style={style} onClick={() => handleCounter(+1)}> + </button>
        </div>
    )
}
