import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import About from "./pages/About";
import Product from "./pages/Product";
import { productsData } from "./api/Api";
import Footer from "./components/Footer";

import{
    createBrowserRouter,
    Outlet,
    RouterProvider,
    ScrollRestoration,
} from "react-router-dom";
import Contact from "./pages/Contact";
const Layout =() =>{
    return(
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"/",
                element: <Home />,
                loader: productsData,
            },
            {
                path:"/product/:id",
                element: <Product />
            },
            {
                path:"/cart",
                element: <Cart />
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/about",
                element: <About />   
            },
            {
                path:"/contact",
                element : <Contact />
            }
        ],
    },
]);
function App() {
    return (
        <div className="font-bodyFont"> 
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;