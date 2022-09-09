import styles from '../styles/styles.module.css'
import {useProduct} from "../hooks/useProduct";
import {createContext, CSSProperties} from "react";
import {InitialValues, onChangeArgs, Product, ProductContextProps} from "../interfaces/interfaces";
import {ProductButtons} from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

interface ProductCardProps {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (name: string) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args:onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}:ProductCardProps) => {

    const {counter, handleCounter, maxCount} = useProduct(
        {onChange, product, value, initialValues}
    );

    return (
        <Provider value={{
            counter,
            handleCounter,
            product,
            maxCount
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children('ProductButtons')}
            </div>
        </Provider>
    )
}