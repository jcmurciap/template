import {CSSProperties, useContext} from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

interface ProductImageProps {
    className?: string;
    img?: string;
    style?: CSSProperties
}

export const ProductImage = ({img, className, style}: ProductImageProps) => { //Argumento opcional
    const {product} = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    }else if (product.img) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img
            alt="Product name"
            className={`${styles.productImg} ${className}`}
            src={imgToShow}
            style={style}
        />
    )
}