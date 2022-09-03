import styles from '../styles/styles.module.css'
import {useProduct} from "../hooks/useProduct";
import noImage from '../assets/no-image.jpg'
import {createContext, ReactElement, useContext} from "react";

interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
}
interface Product {
    id: string;
    title: string;
    img?: string;
}
interface ProductContextProps {
    counter: number
    handleCounter: (value: number) => void
    product: Product
}

const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductImage = ({img = ''}) => { //Argumento opcional
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
        <img className={styles.productImg} src={imgToShow} alt="Product name"/>
    )
}

export const ProductTitle = ({title}:{title?: string}) => { //Argumento obligatorio
    const {product} = useContext(ProductContext);
    let titleToShow: string;

    title ? titleToShow=title : titleToShow=product.title;
    return (
        <span className={styles.productDescription}>{titleToShow}</span>
    )
}

export const ProductButtons = () => {

    const {handleCounter, counter} = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => handleCounter(-1)}> - </button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => handleCounter(+1)}> + </button>
        </div>
    )
}

export const ProductCard = ({children, product}:Props) => {

    const {counter, handleCounter} = useProduct();

    return (
        <Provider value={{
            counter,
            handleCounter,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}