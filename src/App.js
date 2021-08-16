import {Redirect, Route, Switch} from "react-router";
import AdminPage from "./AdminPage/AdminPage";
import DashboardPage from "./DashboardPage/DashboardPage";

function App() {
  return (
    <Switch>
        <Route exact path='/adminboard'>
            <AdminPage/>
        </Route>
        <Route path={'/dashboard'}>
          <DashboardPage />
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/'}/>}/>
    </Switch>
  );
}

export default App;
