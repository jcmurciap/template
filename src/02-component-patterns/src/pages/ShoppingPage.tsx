import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css'
import {useShoppingCart} from "../hooks/useShoppingCart";
import {products} from "../data/products";

export const ShoppingPage = () => {

    const {onProductCountChange, shoppingCart} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <br/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="btn-dark-mode"/>
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-card">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark"
                            style={{width: '100px'}}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage className="custom-image"/>
                            <ProductButtons
                                className="btn-dark-mode"
                                style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
