import {CSSProperties, ReactElement} from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args:onChangeArgs) => void;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}
export interface ProductContextProps {
    counter: number
    handleCounter: (value: number) => void
    product: Product
}

export interface onChangeArgs {
    product: Product;
    count: number
}