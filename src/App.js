import {Redirect, Route, Switch} from "react-router";
import MedicPage from "./MedicPage/MedicPage";
import LandingPage from "./LandingPage/LandingPage";
import AdminPageStatistics from "./AdminPage/AdminPageStatistics";
import LoginPage from "./LoginPage/LoginPage";
import AdminBoard from "./AdminPage/AdminBoard";
import AdminPageUsers from "./AdminPage/AdminPageUsers";
import DashboardPage from "./DashboardPage/DashboardPage";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Operator from "./OperatorPage/Operator";
import AdminRoute from "./Common/AdminRoute";

function App() {
  return (
    <Switch>

        <AdminRoute exact path='/adminboard/statistics'>
            <Header/>
            <AdminPageStatistics/>
            <Footer/>
        </AdminRoute>
        <AdminRoute exact path={'/adminboard'}>
            <Header/>
            <AdminBoard/>
            <Footer/>
        </AdminRoute>
        <Route exact path={'/dashboard'}>
          <Header/>
            <DashboardPage/>
            <Footer/>
        </Route>

        <Route exact path='/adminboard/users'>
            <Header/>
            <AdminPageUsers/>
            <Footer/>
        </Route>

        <Route exact path={'/login'}>
            <Header/>
            <LoginPage/>
            <Footer/>
        </Route>
        <Route exact path='/home'>
            <Header/>
            <LandingPage/>
            <Footer/>
        </Route>
        <Route path='/medicboard'>
            <Header/>
            <MedicPage/>
            <Footer/>
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/home'}/>}/>
    </Switch>
  );
}

export default App;