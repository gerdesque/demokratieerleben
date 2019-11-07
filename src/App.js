import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Nav from './Nav';
const Intro = lazy(() => import('./routes/Intro'));
const ChapterOne = lazy(() => import('./routes/ChapterOne'));

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Intro}/>
            <Route path="/chapterone" component={ChapterOne}/>
            <Route path="/chaptertwo" component={ChapterOne}/>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
