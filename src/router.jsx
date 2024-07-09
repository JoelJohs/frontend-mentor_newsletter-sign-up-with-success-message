import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./views/Home"
import Success from "./views/Success"

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children:[{
        index: true,
        element: <Home/>
    },
    {
        path: "success",
        element: <Success/>
    }
]
}])