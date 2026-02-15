// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import React, {lazy, Suspense} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from "./component/dashboard";
import Home from "./component/Home";
import About from './component/about';
import Connect from './component/connect';
import TheaterWork from './component/Work/theaterwork';
import FilmWork from './component/Work/filmwork';
import Teaching from './component/Work/teaching';
import Resume from './component/Work/resume';
import Portfolio from './component/portfolio';
// import Profile from './component/profile';

function App() {
  return (
       <BrowserRouter>
        <div className='App'>
            <Routes>
              <Route
                index
                element={
                    <Dashboard />
                }
              />
              <Route
                path ="/home"
                element={
                  <Home/>
                }
              />
              <Route
                path='/connect'
                element={
                  <Connect/>
                }
              />
               <Route
                path='/about'
                element={
                  <About/>
                }
              />
              {/* <Route 
                path='/profile'
                element={
                  <Profile/>
                }
              /> */}
              <Route
                path='/theaterwork'
                element={
                  <TheaterWork/>
                }
              />
              <Route
                path='/filmwork'
                element={
                  <FilmWork/>
                }
              />
              <Route
                path='/teaching'
                element={
                  <Teaching/>
                }
              />
              <Route
                path='/resume'
                element={
                  <Resume/>
                }
              />
              <Route
                path='/portfolio'
                element={
                  <Portfolio/>
                }
              />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
