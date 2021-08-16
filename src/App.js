import {Redirect, Route, Switch} from "react-router";
import AdminPage from "./AdminPage/AdminPage";
import MedicPage from "./MedicPage/MedicPage";

function App() {
  return (
    <Switch>
        <Route exact path='/adminboard'>
            <AdminPage/>
        </Route>
        <Route path='/medicboard'>
            <MedicPage/>
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/'}/>}/>
    </Switch>
  );
}

export default App;
