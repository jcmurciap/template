import styles from '../styles/styles.module.css'
import {useProduct} from "../hooks/useProduct";
import {createContext} from "react";
import {ProductCardProps, ProductContextProps} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className, style}:ProductCardProps) => {

    const {counter, handleCounter} = useProduct();

    return (
        <Provider value={{
            counter,
            handleCounter,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}