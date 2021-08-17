import {Redirect, Route, Switch} from "react-router";
import MedicPage from "./MedicPage/MedicPage";
import LandingPage from "./LandingPage/LandingPage";
import AdminPageStatistics from "./AdminPage/AdminPageStatistics";
import LoginPage from "./LoginPage/LoginPage";
import AdminBoard from "./AdminPage/AdminBoard";
import AdminPageUsers from "./AdminPage/AdminPageUsers";

function App() {
  return (
    <Switch>
        <Route exact path='/adminboard/statistics'>
            <AdminPageStatistics/>
        </Route>
        <Route exact path={'/adminboard'}>
            <AdminBoard/>
        </Route>

        <Route exact path='/adminboard/users'>
            <AdminPageUsers/>
        </Route>

        <Route exact path={'/login'}>
            <LoginPage/>
        </Route>
        <Route exact path='/'>
          <LandingPage></LandingPage>
        </Route>
        <Route path='/medicboard'>
            <MedicPage/>
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/home'}/>}/>
    </Switch>
  );
}

export default App;