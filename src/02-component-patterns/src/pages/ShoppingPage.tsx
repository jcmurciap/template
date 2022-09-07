import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css'
import {Product} from "../interfaces/interfaces";
import {useState} from "react";
import {debug} from "util";

const product = {
    id: "1",
    title: "Mugman",
    img: './coffee-mug.png',
}
const product2 = {
    id: "2",
    title: "Coffe Meme",
    img: './coffee-mug2.png',
}

const products:Product[] = [product, product2];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {

//Objeto que viene con muchas llaves de tipo string que a su vez son de tipo ProductInCart
const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

const onProductCountChange = ({count, product}:{count:number, product: Product}) => {
    setShoppingCart(oldShoppingCart => {
        const productInCart:ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};

        if (Math.max(productInCart.count + count, 0) > 0) {
            productInCart.count += count;

            return {
                ...oldShoppingCart,
                [product.id]: productInCart
            }
        }

        //Borrar el producto
        const {[product.id]:toDelete, ...rest} = oldShoppingCart;

        return rest

        // if (count === 0) {
        //     const {[product.id]:toDelete, ...rest} = oldShoppingCart
        //     return rest
        // }
        // return {
        //     ...oldShoppingCart,
        //     [product.id]: {...product, count}
        // }
    })
}
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
