import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LogIn from "../pages/Authentication/LogIn";
import SingUp from "../pages/Authentication/SingUp";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
        ]
    }
])