import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css'
import {products} from "../data/products";

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <br/>
            <ProductCard
                product={product}
                className="bg-dark"
                key={product.id}
                initialValues={{
                   count: 3,
                   maxCount: 10
            }}
            >
                {
                    ({reset, count, handleCounter, maxCount, isMaxCountReached}) => (
                        <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="btn-dark-mode"/>
                            <button style={{margin:"3px"}} onClick={() => handleCounter(-2)}> -2 </button>
                            {
                                (!isMaxCountReached && <button style={{margin: "3px"}} onClick={() => handleCounter(2)}> +2 </button>)
                            }
                            <button style={{margin:"3px"}} onClick={reset}>Reset</button>
                            <span style={{marginLeft:"20px", fontWeight:"bolder"}}>{count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
