//import {LazyPage3} from "../01-lazyload/pages";
import {lazy, LazyExoticComponent} from "react";

type JSXElement = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXElement> | JSXElement; //Carga componentes de tipo lazy y normales en "Component"
    name: string;
}

// 1. Component loaded on demand
const lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes:Route[] = [
    {
        to: "/lazy1",
        path: "lazy1",
        Component: lazy1,
        name: "Lazy1"
    },
    {
        to: "/lazy2",
        path: "lazy2",
        Component: lazy2,
        name: "Lazy2"
    },
    {
        to: "/lazy3",
        path: "lazy3",
        Component: lazy3,
        name: "Lazy3"
    }
    /* TEST THIS APPROACH*/
    // {
    //     to: "/lazy3",
    //     path: "lazy3",
    //     Component: LazyPage3,
    //     name: "Lazy3"
    // }
]
