import styles from '../styles/styles.module.css'
import {useProduct} from "../hooks/useProduct";
import noImage from '../assets/no-image.jpg'

interface Props {
    product: Product
}

interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductCard = ({product}:Props) => {

    const {counter, handleCounter} = useProduct();

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src={product.img ? product.img : noImage} alt="coffe-mug"/>
            <span className={styles.productDescription}>{product.title}</span>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => handleCounter(-1)}> - </button>
                <div className={styles.countLabel}>{counter}</div>
                <button className={styles.buttonAdd} onClick={() => handleCounter(+1)}> + </button>
            </div>
        </div>
    )
}