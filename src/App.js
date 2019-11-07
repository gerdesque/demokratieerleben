import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Nav from './Nav';
import Intro from './routes/Intro';
const ChapterOne = lazy(() => import('./routes/ChapterOne'));
const ChapterTwo = lazy(() => import('./routes/ChapterTwo'));

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Intro}/>
            <Route path="/chapterone" component={ChapterOne}/>
            <Route path="/chaptertwo" component={ChapterTwo}/>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
