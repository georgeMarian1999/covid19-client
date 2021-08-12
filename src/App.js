import logo from './logo.svg';
import {useEffect, useState} from "react";
import {Route, Switch} from "react-router";
import AdminPage from "./AdminPage/AdminPage";

function App() {
  return (
    <Switch>
        <Route exact path='/adminboard'>
            <AdminPage/>
        </Route>
    </Switch>
  );
}

export default App;
