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

function App() {
  return (
    <Switch>

        <Route exact path='/adminboard/statistics'>
            <Header/>
            <AdminPageStatistics/>
            <Footer/>
        </Route>
        <Route exact path={'/adminboard'}>
            <Header/>
            <AdminBoard/>
            <Footer/>
            </Route>
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
            <MedicPage/>
        </Route>
        <Route path={'*'} render={()=> <Redirect to={'/home'}/>}/>
    </Switch>
  );
}

export default App;