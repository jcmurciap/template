import styles from '../styles/styles.module.css'
import {useProduct} from "../hooks/useProduct";

export const ProductCard = () => {

    const {counter, handleCounter} = useProduct();

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src="./coffee-mug.png" alt="coffe-mug"/>

            <span className={styles.productDescription}>Coffe Mug</span>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => handleCounter(-1)}> - </button>
                <div className={styles.countLabel}>{counter}</div>
                <button className={styles.buttonAdd} onClick={() => handleCounter(+1)}> + </button>
            </div>
        </div>
    )
}