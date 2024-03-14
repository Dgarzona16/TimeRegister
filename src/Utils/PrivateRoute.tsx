import {Navigate, RouteProps} from "react-router";

export const PrivateRoute = ({children}: RouteProps) => {
    const isAuth = true; // Replace with your auth logic
    return isAuth ? children : <Navigate to={"/"} replace /> ;

}