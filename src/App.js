import {Redirect, Route, Switch} from "react-router";
import AdminPage from "./AdminPage/AdminPage";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <Switch>
        <Route exact path='/adminboard'>
            <AdminPage/>
        </Route>
        <Route exact path='/home'>
          <LandingPage></LandingPage>
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/'}/>}/>
    </Switch>
  );
}

export default App;
