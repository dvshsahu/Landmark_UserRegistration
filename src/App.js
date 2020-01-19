import React, { Fragment } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from './modules/userRegistration/components/shared/Home';
import Header from './modules/userRegistration/components/shared/Header';
import Footer from './modules/userRegistration/components/shared/Footer';
import RegistrationForm from './modules/userRegistration/components/RegistationForm';
import UserDetails from './modules/userRegistration/components/UserDetails';

function App() {
  return (
    <Fragment >
      <div className="container">
        
        {/* Header section */}
        <Header></Header>

        {/* main Content section */}
        <main className="app-main">
          <div className="app-main-in">
            <AppRouter/>
          </div>
        </main>

       
      </div>

    </Fragment>
  );
}


/**
 * component for routing
 */
const AppRouter=()=>(
  <Router>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/view" exact component={UserDetails} />
        {/* <Route path="/restaurant/:id" component={RestaurantDetails} /> */}
    </Switch>
  </Router>
  );

  
export default App;
