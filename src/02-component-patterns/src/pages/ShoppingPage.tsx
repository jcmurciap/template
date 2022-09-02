import {ProductCard} from "../components/ProductCard";

const product = {
    id: "1",
    title: "Mug",
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <br/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
            </div>
        </div>
    )
}