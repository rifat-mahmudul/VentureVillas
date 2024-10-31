import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : '/contactUs',
                element : <ContactUs></ContactUs>
            },
            {
                path : '/updateProfile',
                element : <UpdateProfile></UpdateProfile>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    },
]);