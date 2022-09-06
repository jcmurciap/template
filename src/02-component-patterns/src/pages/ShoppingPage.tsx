import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css'
import {Product} from "../interfaces/interfaces";
import {useState} from "react";

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
    console.log(count, product);
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
                            onChange={(event) => onProductCountChange(event)}
                        >
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="btn-dark-mode"/>
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-card">
                <ProductCard
                    product={product2}
                    className="bg-dark"
                    style={{width: '100px'}}
                >
                    <ProductImage className="custom-image"/>
                    <ProductButtons className="btn-dark-mode"/>
                </ProductCard>
                <ProductCard
                    product={product}
                    className="bg-dark"
                    style={{width: '100px'}}
                >
                    <ProductImage className="custom-image"/>
                    <ProductButtons className="btn-dark-mode"/>
                </ProductCard>
            </div>
        </div>
    )
}
