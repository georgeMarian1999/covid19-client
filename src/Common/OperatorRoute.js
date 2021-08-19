import React from 'react';
import {Redirect, Route} from "react-router";

const OperatorRoute = ({children,...rest}) =>{
    const user = JSON.parse(sessionStorage.getItem("crtUser"))
    return (
        <Route
            {...rest}
            render={({ location }) =>
                sessionStorage.getItem("crtUser") && (user.type === 'admin' || user.type === 'operator') ? (
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
export default OperatorRoute;