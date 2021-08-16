import {Redirect, Route, Switch} from "react-router";
import AdminPageUsers from "./AdminPage/AdminPageUsers";

function App() {
  return (
    <Switch>
        <Route exact path='/adminboard'>
            <AdminPageUsers/>
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/'}/>}/>
    </Switch>
  );
}

export default App;
