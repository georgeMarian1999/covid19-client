import {Redirect, Route} from "react-router";

const AdminRoute = ({children,...rest}) =>{
    const user = JSON.parse(sessionStorage.getItem("crtUser"))
    return (
        <Route
            {...rest}
            render={({ location }) =>
                sessionStorage.getItem("crtUser")&& user.type === 'admin' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;