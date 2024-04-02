
import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Service from "../Pages/Service/Service";
import Service_Details from "../Pages/Service/Service_Details";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Community from "../Pages/Community/Community";
import Performance from "../Pages/Performance/Performance";
import Blog from "../Pages/Home/Blog/Blog";


const Routes = createBrowserRouter ([
    {
        path: '/', 
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/Login',
                element: <Login></Login>,
            },
            {
                path: '/Register',
                element: <Register></Register>,
            },
            {
                path: '/Blog',
                element: <Blog></Blog>,
            },
            {
                path: '/Community',
                element: <PrivateRoutes><Community></Community></PrivateRoutes>,
            },
            {
                path: '/Performance',
                element: <PrivateRoutes><Performance></Performance></PrivateRoutes>,
            },
            {
                path: '/Service',
                element: <Service></Service>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/Service-details/:id',
                element: <PrivateRoutes><Service_Details></Service_Details></PrivateRoutes>,
                loader: () => fetch('/service_details.json')
            },
        ]

        
    }
])

export default Routes;