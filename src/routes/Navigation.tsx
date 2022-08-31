import {BrowserRouter, NavLink, Routes, Route, Navigate} from "react-router-dom";
import {Suspense} from "react";
import logo from '../logo.svg';
import {routes} from "./routes";

export const Navigation = () => {
    return (
        // 2. Add Suspense setup
        // Suspense se usa si todos los componentes de la ruta son de tipo "Lazy"
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo"/>
                        <ul>
                            {routes.map(({to, name}) =>
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        className={({isActive}) => isActive ? 'nav-active' : ''}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({path, Component}) =>
                            <Route key={path} path={path} element={<Component />}/>
                        )}

                        {/*Rutas no existen*/}
                        <Route path={"/*"} element={<Navigate to="/lazyload" replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
