import {Redirect, Route, Switch} from "react-router";
import MedicPage from "./MedicPage/MedicPage";
import LandingPage from "./LandingPage/LandingPage";
import AdminPageStatistics from "./AdminPage/AdminPageStatistics";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <Switch>
        <Route exact path='/adminboard/statistics'>
            <AdminPageStatistics/>
        </Route>

        <Route exact path={'/login'}>
            <LoginPage/>
        </Route>
        <Route exact path='/home'>
          <LandingPage></LandingPage>
        </Route>
        <Route path='/medicboard'>
            <MedicPage/>
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/'}/>}/>
    </Switch>
  );
}

export default App;
