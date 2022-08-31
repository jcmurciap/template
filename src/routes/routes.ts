//import {LazyPage3} from "../01-lazyload/pages";
import {lazy, LazyExoticComponent} from "react";
import {NoLazy} from "../01-lazyload/pages/NoLazy";

type JSXElement = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXElement> | JSXElement; //Carga componentes de tipo lazy y normales en "Component"
    name: string;
}

// 1. Component loaded on demand
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));

export const routes:Route[] = [
    {
        to: "/lazyload",
        // Todo lo que venga despues de la ruta "/lazyload"
        path: "/lazyload/*",
        Component: LazyLayout,
        name: "Lazy Layout"
    },
    {
        // Carga convencional
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No lazy"
    }
]
