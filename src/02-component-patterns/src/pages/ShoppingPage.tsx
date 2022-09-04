import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css'

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
                <ProductCard
                    product={product}
                    className="bg-dark"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons className="btn-dark-mode"/>
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{backgroundColor: '#70D1F8'}}
                >
                    <ProductImage />
                    <ProductTitle style={{fontWeight: "bold"}}/>
                    <ProductButtons style={{color: 'Black'}}/>
                </ProductCard>
            </div>
        </div>
    )
}
