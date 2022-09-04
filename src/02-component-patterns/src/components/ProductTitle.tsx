import {CSSProperties, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

interface ProductTitleProps {
    className?: string;
    title?: string;
    style?: CSSProperties
}

export const ProductTitle = ({title, className, style}:ProductTitleProps) => { //Argumento obligatorio
    const {product} = useContext(ProductContext);
    let titleToShow: string;

    title ? titleToShow=title : titleToShow=product.title;
    return (
        <span
            className={`${styles.productDescription} ${className}`}
            style={style}
        >
            {titleToShow}
        </span>
    )
}
