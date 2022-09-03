import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";

const product = {
    id: "1",
    title: "Mugman",
    img: './coffee-mug.png',
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
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}