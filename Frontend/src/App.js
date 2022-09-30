
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FirstPage from './components/FirstPage'
import Navbar from './components/FirstPage'
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import VaccineInfocopy from './components/VaccineInfocopy';
import VaccineView from './components/VaccineView';
import SideEffects from './components/SideEffects';
import ContactUs from './components/ContactUs';
import HospitalLogin from './components/HospitalLogin';
import ChildrenList from './components/ChildrenList';
import ChildAdd from './components/ChildAdd';
import ChildView from './components/ChildView';
import EditChild from './components/EditChild';
import VaccineSchedule from './components/VaccineSchedule';
import FindVaccine from './components/FindVaccine';


function App() {
  return (
    <div className="container">

      <Router>
        <Switch>
        <Route path="/" exact component={FirstPage}></Route>
          <Route path="/vaccines" exact component={VaccineInfocopy}></Route>
          <Route path="/vaccinationInformation" exact component={FindVaccine}></Route>
          <Route path="/sideEffect" exact component={SideEffects}></Route>
          <Route path="/contactUs" exact component={ContactUs}></Route>
          <Route path="/hospitallogin" exact component={HospitalLogin}></Route>
          <Route path="/calender/:id" exact component={VaccineSchedule}></Route>
          <Route path="/hospital/service" exact component={ChildrenList}></Route>
          <Route path="/hospital/addChild" exact component={ChildAdd}></Route>
          <Route path="/update/:id" exact component={EditChild}></Route>
          <Route path="/view/:id" exact component={ChildView}></Route>
         
          <Route path="/vaccine/:id" exact component={VaccineView}></Route>
          



        </Switch>
      </Router>


    </div>
  );
}

export default App;
