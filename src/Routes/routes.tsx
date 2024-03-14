import {createBrowserRouter} from "react-router-dom";

//Layouts
import {AuthLayout} from "../Layouts/authLayout/authLayout";
import {MainLayout} from "../Layouts/mainLayout/mainLayout.tsx";
import {PrivateRoute} from "../Utils/PrivateRoute.tsx";
import {SignInPage} from "../Pages/SignInPage/SignInPage.tsx";
import {SignUpPage} from "../Pages/SignUpPage/SignUpPage.tsx";

//Pages

export const route = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "",
                element: <SignInPage />
            },
            {
                path: "/signup",
                element: <SignUpPage />
            }
        ]
    },
    {
        path: "/home",
        element: (
            <PrivateRoute>
                <MainLayout />
            </PrivateRoute>
        ),
        children: []
    }
])