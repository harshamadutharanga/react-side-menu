import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/navigationbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';
import SliderPage from './components/Pages/SlideBar';




function App() {
  return (
        <Router>
         

          <NavBar/>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contactus"  component={ContactUs} />
                <Route path="/SlideBar"  component={SliderPage} />
                
            </Switch>
        </Router>
  );
}

export default App;
