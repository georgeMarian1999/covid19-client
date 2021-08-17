import {Redirect, Route, Switch} from "react-router";
import MedicPage from "./MedicPage/MedicPage";
import LandingPage from "./LandingPage/LandingPage";
import AdminPageStatistics from "./AdminPage/AdminPageStatistics";
import LoginPage from "./LoginPage/LoginPage";
import AdminBoard from "./AdminPage/AdminBoard";
import AdminPageUsers from "./AdminPage/AdminPageUsers";
import AdminRoute from "./Common/AdminRoute";

function App() {
  return (
    <Switch>

        <AdminRoute exact path='/adminboard/statistics'>
            <AdminPageStatistics/>
        </AdminRoute>
        <AdminRoute exact path={'/adminboard'}>
            <AdminBoard/>
        </AdminRoute>

        <AdminRoute exact path='/adminboard/users'>
            <AdminPageUsers/>
        </AdminRoute>

        <Route exact path={'/login'}>
            <LoginPage/>
        </Route>
        <Route exact path='/home'>
            <LandingPage/>
        </Route>
        <Route path='/medicboard'>
            <MedicPage/>
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/home'}/>}/>
    </Switch>
  );
}

export default App;