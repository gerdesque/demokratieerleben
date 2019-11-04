import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
const Intro = lazy(() => import('./routes/Intro'));
const ChapterOne = lazy(() => import('./routes/ChapterOne'));

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Intro</Link>
            </li>
            <li>
              <Link to="/chapterone">I</Link>
            </li>
            <li>
              <Link to="/chaptertwo">II</Link>
            </li>
          </ul>
        </nav>
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
