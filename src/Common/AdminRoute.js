import {Redirect, Route} from "react-router";

const AdminRoute = ({children,...rest}) =>{
    const user = JSON.parse(sessionStorage.getItem("crtUser"))
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.type === 'admin' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/"+user.type+'board',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;