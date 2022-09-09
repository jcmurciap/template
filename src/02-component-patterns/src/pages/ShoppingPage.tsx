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
                    () => (
                        <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="btn-dark-mode"/>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
