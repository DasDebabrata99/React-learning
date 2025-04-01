import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/about";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";




const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/rest-menu/:restId",
                element: <RestaurantMenu />,
            },
        ]
    },

    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



