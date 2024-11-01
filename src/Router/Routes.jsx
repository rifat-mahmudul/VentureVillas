import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import UpdateProfile from "../pages/UpdateProfile";
import Login from "../pages/Login";
import RoomDetails from "../components/RoomDetails";
import Register from "../pages/Register";
import ProfileUpdate from "../components/ProfileUpdate";

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
            },
            {
                path : '/room/:id',
                element : <RoomDetails></RoomDetails>,
                loader : () => fetch('/Data.json')
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/profileUpdate',
                element : <ProfileUpdate></ProfileUpdate>
            },
        ]
    },
]);