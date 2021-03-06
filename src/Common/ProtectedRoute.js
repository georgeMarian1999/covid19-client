import React from 'react';
import {Redirect, Route} from "react-router";

const ProtectedRoute = ({children,...rest}) =>{
    return (
        <Route
            {...rest}
            render={({ location }) =>
                sessionStorage.getItem("crtUser") ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default ProtectedRoute;