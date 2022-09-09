export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}
export interface ProductContextProps {
    counter: number;
    handleCounter: (value: number) => void;
    product: Product;
    maxCount?: number;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}